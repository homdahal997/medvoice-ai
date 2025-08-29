"use client";

import { useState, useRef } from "react";
import { transcribeAudio } from "@/lib/transcription";
import { generateSoapNote } from "@/lib/soap-generator";
import { EnhancedRecordingCard } from "@/components/recording/enhanced-recording-card";
import { EnhancedResultsTabs } from "@/components/recording/enhanced-results-tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Info } from "lucide-react";

export default function EnhancedRecordingInterface() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [transcription, setTranscription] = useState("");
  const [isChunking, setIsChunking] = useState(false);
  const [totalChunks, setTotalChunks] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [soapNote, setSoapNote] = useState<{
    subjective: { text: string; sources: string[] };
    objective: { text: string; sources: string[] };
    assessment: { text: string; sources: string[] };
    plan: { text: string; sources: string[] };
  } | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      // Clear previous states
      setError(null);
      setSuccessMessage(null);
      setTranscription("");
      setSoapNote(null);
      audioChunksRef.current = [];
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
        audioBitsPerSecond: 32000,
      });

      mediaRecorderRef.current = mediaRecorder;

      const processRecording = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });

        if (audioBlob.size === 0) {
          setError(
            "No speech detected. Please speak clearly during the recording or check your microphone permissions."
          );
          return;
        }

        setAudioBlob(audioBlob);
        setIsProcessing(true);
        setError(null);

        try {
          // Show processing message
          setSuccessMessage("Recording captured successfully! Processing audio...");
          
          const transcriptionText = await transcribeAudio(audioBlob);
          setTranscription(transcriptionText);
          
          setSuccessMessage("Transcription complete! Generating SOAP notes...");

          const soapNoteResult = await generateSoapNote(transcriptionText);
          setSoapNote(soapNoteResult);
          
          setSuccessMessage("SOAP notes generated successfully! Your medical documentation is ready.");
          
          // Clear success message after 5 seconds
          setTimeout(() => setSuccessMessage(null), 5000);
          
        } catch (error) {
          console.error("Error processing recording:", error);
          if (error instanceof Error) {
            if (error.message.includes("No transcript generated")) {
              setError(
                "We couldn't detect any speech in your recording. Please try speaking more clearly."
              );
            } else if (
              error.message.includes("network") ||
              error.message.includes("connection")
            ) {
              setError(
                "Network error occurred. Please check your internet connection and try again."
              );
            } else {
              setError(
                "An error occurred while processing your recording. Please try again."
              );
            }
          } else {
            setError("An unexpected error occurred. Please try again.");
          }
        } finally {
          setIsProcessing(false);
          setIsChunking(false);
          setTotalChunks(0);
        }
      };

      mediaRecorder.onstop = processRecording;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
          setTotalChunks((prev) => prev + 1);
          setIsChunking(true);
        }
      };
      
      mediaRecorder.start(10000); // Collect data in 10-second chunks
      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
      
    } catch (error) {
      console.error("Error starting recording:", error);
      if (error instanceof Error && error.name === "NotAllowedError") {
        setError(
          "Microphone access denied. Please allow microphone permissions and try again."
        );
      } else if (error instanceof Error && error.name === "NotFoundError") {
        setError(
          "No microphone found. Please connect a microphone and try again."
        );
      } else {
        setError(
          "Failed to start recording. Please check your microphone and try again."
        );
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      setIsRecording(false);
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("audio/")) {
      setError("Please upload an audio file");
      return;
    }

    // Clear previous states
    setError(null);
    setSuccessMessage(null);
    setTranscription("");
    setSoapNote(null);

    setIsProcessing(true);

    try {
      const fileBuffer = await file.arrayBuffer();
      const audioBlob = new Blob([fileBuffer], { type: "audio/webm" });

      if (audioBlob.size === 0) {
        setError("The audio file appears to be empty or corrupted");
        return;
      }

      setAudioBlob(audioBlob);
      setSuccessMessage("Audio file uploaded successfully! Processing...");

      const transcriptionText = await transcribeAudio(audioBlob);
      setTranscription(transcriptionText);
      
      setSuccessMessage("Transcription complete! Generating SOAP notes...");

      const soapNoteResult = await generateSoapNote(transcriptionText);
      setSoapNote(soapNoteResult);
      
      setSuccessMessage("SOAP notes generated successfully! Your medical documentation is ready.");
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(null), 5000);
      
    } catch (error) {
      console.error("Error processing audio file:", error);
      if (error instanceof Error) {
        setError(
          error.message.includes("No speech detected")
            ? "No speech detected in the audio file"
            : "An error occurred while processing the audio file. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-8 p-4 max-w-6xl mx-auto">
      {/* Status Messages */}
      {error && (
        <Card className="border-2 border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900">Error</h4>
                <p className="text-red-800">{error}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {successMessage && (
        <Card className="border-2 border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-900">Success</h4>
                <p className="text-green-800">{successMessage}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recording Interface */}
      <EnhancedRecordingCard
        isRecording={isRecording}
        recordingTime={recordingTime}
        onStartRecording={startRecording}
        onStopRecording={stopRecording}
        onFileUpload={handleFileUpload}
        audioBlob={audioBlob}
        isChunking={isChunking}
        totalChunks={totalChunks}
        error={error}
        isProcessing={isProcessing}
      />

      {/* Results */}
      {(transcription || isProcessing) && (
        <EnhancedResultsTabs
          isProcessing={isProcessing}
          transcription={transcription}
          soapNote={soapNote}
        />
      )}

      {/* Help Information */}
      {!isRecording && !isProcessing && !transcription && (
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-900">Getting Started</h4>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• Click "Start Recording" to begin capturing audio from your microphone</li>
                  <li>• Or upload an existing audio file using "Upload Audio"</li>
                  <li>• Speak clearly and ensure good audio quality for best results</li>
                  <li>• The AI will automatically transcribe and generate SOAP notes</li>
                  <li>• All processing is HIPAA compliant and secure</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
