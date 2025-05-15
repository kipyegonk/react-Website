import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Active link style
  const activeStyle = {
    color: '#2e8540', // Your brand-primary color
    fontWeight: '600'
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-xl font-bold text-brand-dark hover:text-brand-primary transition-colors"
        >
          Future Earth
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className="hover:text-brand-primary transition-colors"
            style={({ isActive }) => isActive ? activeStyle : undefined}
            end
          >
            HOME
          </NavLink>
          <NavLink 
            to="/sustainable-living" 
            className="hover:text-brand-primary transition-colors"
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            SUSTAINABLE LIVING
          </NavLink>
          <NavLink 
            to="/our-story" 
            className="hover:text-brand-primary transition-colors"
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            OUR STORY
          </NavLink>
          <NavLink 
            to="/contact" 
            className="hover:text-brand-primary transition-colors font-semibold"
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            CONTACT US
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-4 pb-2 space-y-3">
          <NavLink 
            to="/" 
            className="block py-2 px-4 hover:text-brand-primary transition-colors"
            style={({ isActive }) => isActive ? activeStyle : undefined}
            end
          >
            HOME
          </NavLink>
          <NavLink 
            to="/sustainable-living" 
            className="block py-2 px-4 hover:text-brand-primary transition-colors"
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            SUSTAINABLE LIVING
          </NavLink>
          <NavLink 
            to="/our-story" 
            className="block py-2 px-4 hover:text-brand-primary transition-colors"
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            OUR STORY
          </NavLink>
          <NavLink 
            to="/contact" 
            className="block py-2 px-4 hover:text-brand-primary transition-colors font-semibold"
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            CONTACT US
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;