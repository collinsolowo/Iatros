import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">IATROS</div>
                <div className="text-xs text-blue-200 font-medium tracking-wide">SPECIALIST HOSPITAL</div>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Iatros offers comprehensive fertility treatments with experienced care for aspiring parents.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-100 hover:text-white text-sm transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                Home
              </Link></li>
              <li><Link to="/team" className="text-blue-100 hover:text-white text-sm transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                Our Team
              </Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white text-sm transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                Services
              </Link></li>
              <li><Link to="/success-stories" className="text-blue-100 hover:text-white text-sm transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                Success Stories
              </Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white text-sm transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                Book Appointment
              </Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 flex-shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1224 Health St<br />City, Country</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +234 600 125 4567
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@iatros.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-3 mb-6">
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 border border-white/20">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 border border-white/20">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 border border-white/20">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-xs text-blue-100 mb-2">JCI Accredited Center</p>
              <p className="text-xs text-blue-200">15+ Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-blue-100">
          <p className="mb-2">&copy; 2025 Iatros Specialist Hospital. All rights reserved.</p>
          <p className="footer-credit">
            Crafted with excellence by{" "}
            <a
              href="https://wa.me/2347036280306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors font-medium"
            >
              Haven Ace BPC Dev Team
            </a>
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/2346001254567"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 z-50 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </footer>
  );
}
