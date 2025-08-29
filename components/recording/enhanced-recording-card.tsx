"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mic,
  Square,
  Play,
  Pause,
  Download,
  Upload,
  Waves,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AudioUpload } from "./audio-upload";

interface EnhancedRecordingCardProps {
  isRecording: boolean;
  recordingTime: number;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  audioBlob: Blob | null;
  isChunking?: boolean;
  totalChunks?: number;
  error?: string | null;
  isProcessing?: boolean;
}

export function EnhancedRecordingCard({
  isRecording,
  recordingTime,
  onStartRecording,
  onStopRecording,
  onFileUpload,
  audioBlob,
  isChunking,
  totalChunks,
  error,
  isProcessing
}: EnhancedRecordingCardProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [audioBlob]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleDownload = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `medvoice-recording-${new Date().toISOString().slice(0, 19)}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const getStatusColor = () => {
    if (error) return "text-red-600";
    if (isProcessing) return "text-blue-600";
    if (isRecording) return "text-red-600";
    if (audioBlob) return "text-green-600";
    return "text-gray-600";
  };

  const getStatusIcon = () => {
    if (error) return <AlertCircle className="h-5 w-5" />;
    if (isProcessing) return <Loader2 className="h-5 w-5 animate-spin" />;
    if (isRecording) return <Mic className="h-5 w-5 animate-pulse" />;
    if (audioBlob) return <CheckCircle className="h-5 w-5" />;
    return <Mic className="h-5 w-5" />;
  };

  const getStatusText = () => {
    if (error) return "Error occurred";
    if (isProcessing) return "Processing audio...";
    if (isRecording) return "Recording in progress";
    if (audioBlob) return "Recording complete";
    return "Ready to record";
  };

  return (
    <Card className="overflow-hidden border-2 hover:border-blue-200 transition-colors duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 border-b">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${isRecording ? 'bg-red-100' : 'bg-blue-100'}`}>
              <Mic className={`h-6 w-6 ${isRecording ? 'text-red-600' : 'text-blue-600'}`} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Voice Recording</h3>
              <p className="text-sm text-gray-600">High-quality medical audio capture</p>
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className={`flex items-center space-x-2 ${getStatusColor()}`}>
            {getStatusIcon()}
            <span className="text-sm font-medium">{getStatusText()}</span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Recording Timer and Waveform */}
          {isRecording && (
            <div className="text-center space-y-4">
              <div className="text-4xl font-mono font-bold text-gray-900">
                {formatTime(recordingTime)}
              </div>
              
              {/* Animated Waveform */}
              <div className="flex items-center justify-center space-x-1 h-16 bg-gray-50 rounded-lg p-4">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-blue-500 rounded-sm animate-pulse"
                    style={{
                      height: `${Math.random() * 60 + 20}%`,
                      width: '4px',
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
              
              {isChunking && (
                <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
                  <Waves className="h-4 w-4" />
                  <span>Processing chunks: {totalChunks}</span>
                </div>
              )}
            </div>
          )}

          {/* Control Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {!isRecording ? (
              <>
                <Button
                  onClick={onStartRecording}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isProcessing}
                >
                  <Mic className="mr-3 h-5 w-5" />
                  Start Recording
                </Button>
                
                <div className="flex items-center space-x-2 text-gray-500">
                  <span>or</span>
                </div>
                
                <div className="relative">
                  <input
                    type="file"
                    accept=".mp3,.wav,.m4a,.aac,.ogg,.flac,audio/*"
                    onChange={onFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={isProcessing}
                  />
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-8 py-4 text-lg border-2 hover:border-blue-300"
                    disabled={isProcessing}
                  >
                    <Upload className="mr-3 h-5 w-5" />
                    Upload Audio
                  </Button>
                </div>
              </>
            ) : (
              <Button 
                onClick={onStopRecording} 
                size="lg"
                variant="outline" 
                className="px-8 py-4 text-lg border-2 border-red-300 text-red-600 hover:bg-red-50"
              >
                <Square className="mr-3 h-5 w-5" />
                Stop Recording
              </Button>
            )}
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-red-800">
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">Error</span>
              </div>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          )}

          {/* Audio Playback Controls */}
          {audioBlob && !error && (
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900">Recorded Audio</h4>
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-300 hover:bg-blue-50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handlePlayPause}
                  variant="outline"
                  size="sm"
                  className="flex-shrink-0"
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <audio
                ref={audioRef}
                src={audioUrl || undefined}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />
            </div>
          )}

          {/* Processing Indicator */}
          {isProcessing && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
                <div>
                  <p className="font-medium text-blue-900">Processing your recording...</p>
                  <p className="text-sm text-blue-700">Transcribing audio and generating SOAP notes</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
