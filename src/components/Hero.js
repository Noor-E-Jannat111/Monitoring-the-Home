import React from 'react'
import heroImg from '../images/hero.png'

const Hero = () => {
  return (
    <>
      <section className="relative h-screen">
        <div className="flex flex-col justify-center h-screen px-32">
          <h1 className="text-color font-bold text-6xl leading-snug w-1/2 mb-10">
            <span className="span-color">Home</span> is where your Wi-Fi
            connects automatically
          </h1>
          <p>Let's help you find a homey apartment! 🚀🔥</p>
        </div>

        <div className="absolute right-0 top-0">
          <img src={heroImg} alt="Showcase" />
        </div>
      </section>
    </>
  )
}

export default Hero
