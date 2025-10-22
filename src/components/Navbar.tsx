import { Plus, Menu } from 'lucide-react';
import { useState } from 'react';

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Flex Home</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Projects</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Properties</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Agents</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">News</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Careers</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>

            <button className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition">
              <Plus size={18} />
              <span>Add Property</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Properties</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Agents</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">News</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Careers</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
            <button className="flex w-full items-center space-x-2 justify-center bg-blue-600 text-white py-2 rounded-md">
              <Plus size={18} />
              <span>Add Property</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
