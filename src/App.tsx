import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import Socials from './pages/Socials';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <NavLink 
                  to="/" 
                  className="text-gray-900 font-semibold text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </NavLink>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink 
                  to="/"
                  className={({ isActive }) => 
                    `text-gray-600 hover:text-gray-900 transition-colors ${
                      isActive ? 'border-b-2 border-blue-500' : ''
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/resume"
                  className={({ isActive }) => 
                    `text-gray-600 hover:text-gray-900 transition-colors ${
                      isActive ? 'border-b-2 border-blue-500' : ''
                    }`
                  }
                >
                  Resume
                </NavLink>
                <NavLink 
                  to="/interests"
                  className={({ isActive }) => 
                    `text-gray-600 hover:text-gray-900 transition-colors ${
                      isActive ? 'border-b-2 border-blue-500' : ''
                    }`
                  }
                >
                  Interests
                </NavLink>
                <NavLink 
                  to="/projects"
                  className={({ isActive }) => 
                    `text-gray-600 hover:text-gray-900 transition-colors ${
                      isActive ? 'border-b-2 border-blue-500' : ''
                    }`
                  }
                >
                  Projects
                </NavLink>
                <NavLink 
                  to="/socials"
                  className={({ isActive }) => 
                    `text-gray-600 hover:text-gray-900 transition-colors ${
                      isActive ? 'border-b-2 border-blue-500' : ''
                    }`
                  }
                >
                  Connect
                </NavLink>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-blue-500 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-blue-500 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </NavLink>
                <NavLink
                  to="/interests"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-blue-500 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Interests
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-blue-500 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/socials"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-blue-500 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connect
                </NavLink>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
        </main>

        <footer className="bg-white border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
              <p className="mt-2">
                <a href="mailto:contact@yourdomain.com" className="hover:text-gray-900 transition-colors">
                  contact@yourdomain.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;