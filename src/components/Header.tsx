import React from 'react';

const Header: React.FC = () => (
  <div className="w-full">
    <div
      className="w-full bg-cover bg-center h-48 rounded-lg overflow-hidden"
      style={{
        backgroundImage:
          'url(https://www.shutterstock.com/shutterstock/photos/2195255253/display_1500/stock-photo-businessmen-making-handshake-with-partner-greeting-dealing-merger-and-acquisition-business-2195255253.jpg)',
      }}
    >
      <div className="h-full flex-column items-center justify-center bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-white text-4xl font-bold p-8 pb-0">Partner With Us</h1>
        <p className="text-white text-l font-bold m-4 mt-0 p-4">
          Be our partner in just a few steps and start increasing your reach by gaining new customers.
        </p>
      </div>
    </div>
  </div>
);

export default Header;
