import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group" onClick={closeMobileMenu}>
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-700 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <svg className="w-6 h-6 sm:w-9 sm:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </div>
            <div>
              <div className="text-base sm:text-xl font-bold text-gray-900 tracking-tight">IATROS</div>
              <div className="text-[10px] sm:text-xs text-blue-700 font-semibold tracking-wider">SPECIALIST HOSPITAL</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${isActive('/')
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
                }`}
            >
              Home
            </Link>
            <Link
              to="/team"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${isActive('/team')
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
                }`}
            >
              Our Team
            </Link>
            <Link
              to="/services"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${isActive('/services')
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
                }`}
            >
              Services
            </Link>
            <Link
              to="/success-stories"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${isActive('/success-stories')
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
                }`}
            >
              Success Stories
            </Link>
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:shadow-lg transition-all hover:scale-105 duration-300 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-16 sm:top-20 bg-gray-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeMobileMenu}
      />

      <div
        className={`md:hidden fixed top-16 sm:top-20 right-0 w-full sm:w-80 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActive('/')
                ? 'text-blue-700 bg-blue-50 shadow-sm'
                : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
              }`}
          >
            Home
          </Link>
          <Link
            to="/team"
            onClick={closeMobileMenu}
            className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActive('/team')
                ? 'text-blue-700 bg-blue-50 shadow-sm'
                : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
              }`}
          >
            Our Team
          </Link>
          <Link
            to="/services"
            onClick={closeMobileMenu}
            className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActive('/services')
                ? 'text-blue-700 bg-blue-50 shadow-sm'
                : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
              }`}
          >
            Services
          </Link>
          <Link
            to="/success-stories"
            onClick={closeMobileMenu}
            className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActive('/success-stories')
                ? 'text-blue-700 bg-blue-50 shadow-sm'
                : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
              }`}
          >
            Success Stories
          </Link>

          <div className="pt-4 pb-2">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-4 rounded-xl text-base font-bold hover:shadow-lg transition-all hover:scale-105 duration-300 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Link>
          </div>

          <div className="pt-4 mt-4 border-t border-gray-100">
            <a
              href="tel:+2346001254567"
              className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50/50 rounded-xl transition-all"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">+234 600 125 4567</span>
            </a>
            <a
              href="mailto:info@iatros.com"
              className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50/50 rounded-xl transition-all"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">info@iatros.com</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
