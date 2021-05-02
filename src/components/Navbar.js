import React, { useState } from 'react'
import data from '../data/navbar'
import logo from '../images/logo.png'

const Navbar = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(data)

  return (
    <>
      <header className="absolute w-full z-50 flex items-center justify-between py-3 px-32">
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <nav>
          <ul className="flex text-sm">
            {links.map((link) => {
              const { id, text } = link

              return (
                <li key={id} className="mx-5">
                  {text}
                </li>
              )
            })}
          </ul>
        </nav>

        <div>
          <button className="mx-3 text-sm text-purple-900 font-bold uppercase">
            Log In
          </button>
          <button className="text-sm bg-white py-2 px-4 rounded-full text-purple-900 font-bold uppercase border transition-all hover:bg-purple-900 hover:text-white">
            Sign Up
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
