"use client";

import { Star, Quote, TrendingUp, Clock, Users, Shield } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "75%",
    label: "Reduction in Documentation Time",
    description: "Save 2+ hours daily on medical documentation"
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Transcription Accuracy",
    description: "Medical-grade precision with AI technology"
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Healthcare Professionals",
    description: "Trusted by doctors and medical staff worldwide"
  },
  {
    icon: Shield,
    value: "100%",
    label: "HIPAA Compliant",
    description: "Enterprise security and privacy protection"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Emergency Medicine Physician",
    hospital: "Metro General Hospital",
    content: "MedVoice AI has revolutionized my documentation workflow. I can now focus entirely on patient care while the AI handles all the note-taking. It's incredibly accurate and saves me hours every day.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Family Medicine",
    hospital: "Community Health Center",
    content: "The SOAP note generation is phenomenal. The AI understands medical terminology perfectly and creates comprehensive notes that meet all our documentation standards. Game-changer for our practice.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Dr. Emily Johnson",
    role: "Internal Medicine",
    hospital: "University Medical Center",
    content: "As someone who sees 30+ patients daily, MedVoice AI has been a lifesaver. The real-time transcription and automated SOAP notes have reduced my documentation burden significantly.",
    rating: 5,
    avatar: "EJ"
  }
];

const benefits = [
  {
    title: "Reduce Physician Burnout",
    description: "Eliminate tedious documentation tasks and focus on patient care",
    impact: "2+ hours saved daily"
  },
  {
    title: "Improve Documentation Quality",
    description: "Consistent, comprehensive SOAP notes that meet medical standards",
    impact: "99.9% accuracy rate"
  },
  {
    title: "Enhance Patient Experience",
    description: "More face-to-face time with patients, less time on paperwork",
    impact: "Better patient satisfaction"
  },
  {
    title: "Increase Practice Efficiency",
    description: "Faster patient turnover and improved workflow optimization",
    impact: "25% more patients per day"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Healthcare
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join thousands of healthcare providers who have transformed their documentation workflow
          </p>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Healthcare Providers Choose MedVoice AI</h3>
            <p className="text-lg text-gray-600">Real benefits that make a difference in your daily practice</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {benefit.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Healthcare Professionals Say</h3>
            <p className="text-lg text-gray-600">Real feedback from doctors using MedVoice AI daily</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-100">
                  <Quote className="h-8 w-8" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.hospital}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
