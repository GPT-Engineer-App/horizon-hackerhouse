import React from 'react';

const Contact = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-cyan-400">
      <div>
        <h1 className="text-5xl text-center">Contact Us</h1>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block">Name</label>
            <input type="text" className="w-full p-2 bg-gray-800 text-cyan-400" />
          </div>
          <div>
            <label className="block">Email</label>
            <input type="email" className="w-full p-2 bg-gray-800 text-cyan-400" />
          </div>
          <div>
            <label className="block">Message</label>
            <textarea className="w-full p-2 bg-gray-800 text-cyan-400"></textarea>
          </div>
          <button type="submit" className="w-full p-2 bg-cyan-600 text-black">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;