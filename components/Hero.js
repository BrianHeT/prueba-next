import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white relative hero-background"
    >
      <div className="absolute inset-0 " />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black" >
          Awesome UI Dark <br></br> Template for <br></br> Webflow Agency
        </h1>

        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
          Get in touch
        </button>
      </div>
    </section>
  );
}