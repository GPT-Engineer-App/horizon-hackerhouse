import React from 'react';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-cyan-400">
      <div>
        <h1 className="text-5xl text-center text-white">Welcome to Kotani Labs</h1>
        <p className="text-center mt-4 text-gray-300">
          Kotani Labs is an open source research and development lab focused on web 3 and blockchain technologies.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-cyan-500 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-yellow-500 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-cyan-400 rounded-full"></div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-800 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;