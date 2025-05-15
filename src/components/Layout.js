import React, { useState } from 'react';
import Head from 'next/head';

const Layout = ({ children, title = "Future Earth" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Sustainable living solutions for communities worldwide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
          <div className="text-xl font-bold text-brand-dark">Future Earth</div>
          
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-brand-primary">HOME</a>
            <a href="/sustainable-living" className="hover:text-brand-primary">SUSTAINABLE LIVING</a>
            <a href="/our-story" className="hover:text-brand-primary">OUR STORY</a>
            <a href="/contact" className="text-brand-primary font-semibold">CONTACT US</a>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg p-4 z-40">
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-brand-primary">HOME</a>
              <a href="/sustainable-living" className="hover:text-brand-primary">SUSTAINABLE LIVING</a>
              <a href="/our-story" className="hover:text-brand-primary">OUR STORY</a>
              <a href="/contact" className="text-brand-primary font-semibold">CONTACT US</a>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            {/* Footer content same as in ContactUs */}
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Future Earth Sustainable Living</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;