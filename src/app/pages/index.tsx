import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Mus1cF1nder</h1>
      {/* Bands list */}
      <div>
        {/* Populate bands dynamically */}
        <button>Band 1</button>
        <button>Band 2</button>
        {/* Add buttons for each band */}
      </div>
      {/* Songs list */}
      <div>
        {/* Populate songs based on selected band */}
        <h2>Songs for selected band</h2>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          {/* Add songs dynamically */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
