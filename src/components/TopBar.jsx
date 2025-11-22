import React from 'react';

// Placeholder SVGs for the icons
const BellIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4
    c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.93 6 11v5l-2 
    2v1h16v-1l-2-2z" />
  </svg>
);

const UserIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
    1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 
    1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const WalletIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11
    0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 
    2 .9 2 2v1h-9c-1.11 0-2 .9-2 
    2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 
    0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 
    1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const MenuIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function TopBar({ toggleSidebar }) {
  return (
    <header className="h-20 bg-white shadow-lg flex items-center justify-between px-4 md:px-10 sticky top-0 z-20 mb-8">

      {/* Mobile Hamburger Button */}
      <button 
        onClick={toggleSidebar} 
        className="text-gray-700 hover:text-red-500 md:hidden p-2 rounded-lg"
      >
        <MenuIcon className="w-8 h-8" />
      </button>

      {/* LOGO (Centered on mobile) - Adjusted text size for small screens */}
      <div className="md:hidden">
        <h1 className="text-xl font-extrabold text-red-500">
          APNATEAM <span className="text-gray-900 text-lg">11</span>
        </h1>
      </div>

      {/* Right Section */}
      {/* CHANGED: space-x-8 to space-x-3 md:space-x-8 to save space on mobile */}
      <div className="flex items-center space-x-3 md:space-x-8">

        {/* Wallet Button - FIXED */}
        <button className="flex items-center p-2 md:px-5 md:py-3 md:bg-gray-100 rounded-xl text-base font-semibold hover:bg-gray-200 transition">
          {/* Icon is always visible, margin-right only on desktop */}
          <WalletIcon className="w-7 h-7 md:w-6 md:h-6 md:mr-2 text-green-600" />
          
          {/* Text is HIDDEN on mobile, visible on Desktop (md:block) */}
          <span className="hidden md:block">
            ₹ 12,120.99
          </span>
        </button>
        
        {/* Bell */}
        <button className="text-gray-500 hover:text-red-500 transition">
          <BellIcon className="w-7 h-7" />
        </button>

        {/* User */}
        <button className="text-gray-500 hover:text-red-500 transition">
          <UserIcon className="w-7 h-7" />
        </button>

      </div>
    </header>
  );
}