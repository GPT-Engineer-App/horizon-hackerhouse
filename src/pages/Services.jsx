import React from 'react';

const Services = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-cyan-400">
      <div>
        <h1 className="text-5xl text-center">Our Services</h1>
        <ul className="mt-4 space-y-2">
          <li>Node Validation</li>
          <li>L2 EVM Tech</li>
          <li>Zero Knowledge Tech</li>
          <li>Data Availability</li>
          <li>Decentralized and Shared Sequencers</li>
          <li>Decentralized AI</li>
          <li>Roll-Ups and Roll-Ups-as-Service</li>
          <li>MEV</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;