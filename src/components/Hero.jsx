import React from 'react'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 ">
      <div className="flex flex-col gap-4 ">
        <p>WELCOME TO</p>
        <h1 className="uppercase font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl ">
          GYM<span className="text-blue-400 font-medium ">FIT</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light ">
        Get <span className="text-blue-400 font-medium ">inspired</span>, get{' '}
        <span className="text-blue-400 font-medium ">fit</span>, and stay{' '}
        <span className="text-blue-400 font-medium ">healthy</span> with our
        programme!
      </p>
      <button className="px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200 ">
        <p>Accept & Begin</p>
      </button>
    </div>
  )
}
