import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Footer content sections */}
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Future Earth Sustainable Living</p>
      </div>
    </footer>
  );
};

export default Footer;