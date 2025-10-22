import { Heart, User, ChevronDown } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-blue-900 text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Quote */}
        <p className="text-gray-100">
          Join us for Exclusive Open House Events This Weekend and Find Your Perfect Home!
        </p>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 hover:text-blue-300 transition">
            <Heart size={16} />
            <span>Wishlist (0)</span>
          </button>

          <div className="flex items-center space-x-1 hover:text-blue-300 cursor-pointer">
            <span>USD</span>
            <ChevronDown size={14} />
          </div>

          <div className="flex items-center space-x-1 hover:text-blue-300 cursor-pointer">
            <span>English</span>
            <ChevronDown size={14} />
          </div>

          <button className="flex items-center space-x-1 hover:text-blue-300 transition">
            <User size={16} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
