import React from "react";

const MenuButton: React.FC = () => {
    return (
        <div className="relative">
          <button className="relative 
              top-6
              right-6
              h-14
              w-14
              rounded-md
              bg-emerald-600/20 
              p-4
              backdrop-blur-3xl
              transition-all
              duration-300
              hover:bg-emerald-600/30
              hover:scale-105"
            aria-label="Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-emerald-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
    );
};

export default MenuButton;