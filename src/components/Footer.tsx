"use client"

import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 text-green-600" strokeWidth={2} />
              <span className="ml-2 text-xl font-bold">MarcViews</span>
            </div>
            <p className="text-gray-600 text-sm">
              Enterprise cybersecurity solutions protecting businesses worldwide since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/company/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/security" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Security Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">B-41, B-Block, Sector-63, Noida, UP 201301</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gray-600 mr-2" />
                <Link
                  href="mailto:contact@marcviews.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  contact@marcviews.com
                </Link>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gray-600 mr-2" />
                <Link href="tel:+15551234567" className="text-gray-600 hover:text-gray-900 transition-colors">
                  +1 (555) 123-4567
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MarcViews Networks, Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <button className="text-gray-500 hover:text-gray-900 transition-colors">Do Not Sell My Information</button>
            <button className="text-gray-500 hover:text-gray-900 transition-colors">Accessibility</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
