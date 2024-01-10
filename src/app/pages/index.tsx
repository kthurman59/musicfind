// src/pages/index.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-4xl font-bold mb-4">MusicFind</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Bands will be listed here */}
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Band 1</h2>
          {/* Additional band details can be added here */}
        </div>
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Band 2</h2>
          {/* Additional band details can be added here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
