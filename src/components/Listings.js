import React, { useState } from 'react'
import data from '../data/listings'
import { FaPhone } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'

const Listings = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data)

  return (
    <>
      <div className="flex items-center justify-between pt-56 px-32 mb-5">
        <h2 className="text-color font-bold text-3xl">View Listings</h2>
        <p className="underline text-color text-sm cursor-pointer">
          View all listings
        </p>
      </div>
      <section className="px-32 grid grid-cols-2 gap-10">
        {cards.map((card) => {
          const {
            id,
            image,
            tag1,
            tag2,
            tag3,
            tag4,
            title,
            details,
            location,
            phone,
          } = card

          return (
            <div key={id} className="border rounded p-5 relative">
              <img src={image} alt={title} className="w-full rounded-lg mb-2" />
              <div className="mb-4">
                <small className="mx-2 px-2 py-1 rounded-lg text-xs">
                  {tag1}
                </small>
                <small className="mx-2 px-2 py-1 rounded-lg text-xs">
                  {tag2}
                </small>
                <small className="mx-2 px-2 py-1 rounded-lg text-xs">
                  {tag3}
                </small>
                <small className="mx-2 px-2 py-1 rounded-lg text-xs">
                  {tag4}
                </small>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl">{title}</h3>
                <p className="underline text-sm cursor-pointer">{details}</p>
              </div>
              <p className="flex items-center text-purple-900 text-sm mb-3">
                <HiLocationMarker className="mr-3 text-yellow-400 text-xl" />{' '}
                {location}
              </p>
              <p className="flex items-center text-purple-900 text-sm">
                <FaPhone className="mr-3 text-yellow-400 text-xl" /> {phone}
              </p>

              <div className="absolute top-8 right-8 bg-yellow-300 inline-block p-2 rounded-full">
                <BsHeart className="text-xl" />
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Listings
