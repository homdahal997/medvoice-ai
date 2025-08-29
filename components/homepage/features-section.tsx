"use client";

import { 
  Mic, 
  FileText, 
  Brain, 
  Clock, 
  Shield, 
  Users, 
  BarChart3, 
  Globe,
  Zap,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Recording",
    description: "High-quality audio capture with noise reduction and speaker identification",
    benefits: ["Crystal clear audio", "Multi-speaker detection", "Background noise filtering"],
    color: "blue"
  },
  {
    icon: Brain,
    title: "AI Transcription",
    description: "Advanced AI-powered transcription with medical terminology recognition",
    benefits: ["99.9% accuracy", "Medical vocabulary", "Real-time processing"],
    color: "green"
  },
  {
    icon: FileText,
    title: "SOAP Generation",
    description: "Automated SOAP note creation following medical documentation standards",
    benefits: ["Structured format", "Clinical accuracy", "Instant generation"],
    color: "purple"
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Reduce documentation time by 75% with automated note generation",
    benefits: ["2+ hours saved daily", "Faster patient turnover", "Reduced burnout"],
    color: "orange"
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Enterprise-grade security with full HIPAA compliance and encryption",
    benefits: ["End-to-end encryption", "Audit trails", "Access controls"],
    color: "red"
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for 50+ languages with automatic language detection",
    benefits: ["Global accessibility", "Auto-detection", "Cultural sensitivity"],
    color: "indigo"
  }
];

const upcomingFeatures = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multi-doctor workspaces with shared templates and review workflows"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into documentation patterns and efficiency metrics"
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "AI-powered clinical decision support and automated follow-up reminders"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}Modern Healthcare
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline medical documentation and focus on what matters most - patient care.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${feature.color}-100 text-${feature.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7" />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className={`h-4 w-4 text-${feature.color}-500 mr-2 flex-shrink-0`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-lg text-gray-600">
              Advanced enterprise features to transform your healthcare workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
