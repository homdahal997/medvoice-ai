"use client";

import { Mic, Mail, Phone, MapPin, Shield, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">MedVoice AI</div>
                <div className="text-sm text-gray-400">Medical Voice Assistant</div>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Transforming medical documentation with AI-powered voice technology. 
              Helping healthcare professionals focus on what matters most - patient care.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>HIPAA Compliant & SOC 2 Certified</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/record" className="text-gray-300 hover:text-white transition-colors">Start Recording</Link></li>
              <li><Link href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link></li>
              <li><Link href="#integrations" className="text-gray-300 hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#press" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 mb-6">
              <li><Link href="#help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#docs" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#api" className="text-gray-300 hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="#status" className="text-gray-300 hover:text-white transition-colors">System Status</Link></li>
            </ul>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@medvoice.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">1-800-MEDVOICE</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#security" className="hover:text-white transition-colors">Security</Link>
              <Link href="#compliance" className="hover:text-white transition-colors">Compliance</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} MedVoice AI. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for healthcare professionals.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
