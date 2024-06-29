import React from 'react';
import lunarPunkBackground from '../../public/images/lunar-punk-background.jpg';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-cyan-400" style={{ backgroundImage: `url(${lunarPunkBackground})`, backgroundSize: 'cover' }}>
      <div>
        <h1 className="text-5xl text-center text-white">Welcome to Kotani Labs</h1>
        <p className="text-center mt-4 text-gray-300">
          Kotani Labs is an open source research and development lab focused on web 3 and blockchain technologies.
        </p>
      </div>
    </div>
  );
};

export default Index;