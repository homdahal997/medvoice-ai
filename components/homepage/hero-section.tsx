"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, FileText, Brain, Shield } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Medical Icons */}
      <div className="absolute top-20 left-10 text-blue-200 animate-float">
        <Mic className="h-8 w-8" />
      </div>
      <div className="absolute top-32 right-20 text-green-200 animate-float-delayed">
        <FileText className="h-6 w-6" />
      </div>
      <div className="absolute bottom-20 left-20 text-blue-300 animate-float">
        <Brain className="h-7 w-7" />
      </div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" />
              HIPAA Compliant • Enterprise Ready
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Medical
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  {" "}Documentation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                AI-powered voice assistant that records, transcribes, and generates 
                comprehensive SOAP notes in seconds. Reduce documentation time by 75%.
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Save 2+ hours daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">99.9% accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Real-time processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Multi-language support</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/record">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Start Recording
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
                <span>SOC 2 Certified</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Dashboard Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Patient Visit Recording</h3>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500">Recording</span>
                  </div>
                </div>
                
                {/* Waveform Visualization */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-end space-x-1 h-16">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-blue-500 rounded-sm animate-pulse"
                        style={{
                          height: `${Math.random() * 60 + 10}%`,
                          width: '4px',
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Live Transcription */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Live Transcription</h4>
                  <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                    "Patient reports chest pain that started this morning..."
                    <span className="animate-pulse">|</span>
                  </div>
                </div>
                
                {/* SOAP Preview */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-50 rounded p-2">
                    <div className="font-medium text-green-800">Subjective</div>
                    <div className="text-green-600">Chest pain, morning onset</div>
                  </div>
                  <div className="bg-blue-50 rounded p-2">
                    <div className="font-medium text-blue-800">Objective</div>
                    <div className="text-blue-600">Vital signs stable</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium">Time Saved</div>
              <div className="text-2xl font-bold">2.5 hrs</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium">Accuracy</div>
              <div className="text-2xl font-bold">99.9%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
