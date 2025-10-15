import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900 tracking-tight">IATROS</div>
              <div className="text-xs text-blue-700 font-semibold tracking-wider">SPECIALIST HOSPITAL</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive('/')
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
                }`}
            >
              Home
            </Link>
            <Link
              to="/team"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive('/team')
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
                }`}
            >
              Our Team
            </Link>
            <Link
              to="/services"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive('/services')
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
                }`}
            >
              Services
            </Link>
            <Link
              to="/success-stories"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                isActive('/success-stories')
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
        </div>
      </div>
    </header>
  );
}
