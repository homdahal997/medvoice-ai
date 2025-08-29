import EnhancedRecordingInterface from "@/components/enhanced-recording-interface";
import { Navigation } from "@/components/homepage/navigation";

export default function RecordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      <main className="pt-8">
        <div className="container max-w-7xl mx-auto py-8 px-4">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              MedVoice AI - Medical Voice Assistant
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered voice assistant for healthcare professionals to record, transcribe, and generate comprehensive SOAP notes
            </p>
            <div className="flex justify-center space-x-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>99.9% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Real-time Processing</span>
              </div>
            </div>
          </header>

          <EnhancedRecordingInterface />
        </div>
      </main>
    </div>
  );
}
