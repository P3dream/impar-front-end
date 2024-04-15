import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-4 flex items-center justify-center shadow-md opacity-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-extralight text-left pl-2">Teste - ímpar</h1>
      </div>
    </header>
  );
}

export default Header;
