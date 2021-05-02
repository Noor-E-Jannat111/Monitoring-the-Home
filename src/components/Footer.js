import React, { useState } from 'react'
import data from '../data/footer'
import footerIcon from '../images/logo.png'

const Footer = () => {
  // eslint-disable-next-line
  const [footerLinks, setFooterLinks] = useState(data)

  return (
    <>
      <footer className="flex justify-between px-40 py-20">
        <div>
          <img src={footerIcon} alt="" />
        </div>
        {footerLinks.map((fl) => {
          const { id, title, links } = fl

          return (
            <div key={id}>
              <h4>{title}</h4>
              <ul>
                {links.map((link) => {
                  return (
                    <li
                      key={link}
                      className="my-3 text-sm text-gray-500 tracking-wide"
                    >
                      {link}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </footer>
    </>
  )
}

export default Footer
