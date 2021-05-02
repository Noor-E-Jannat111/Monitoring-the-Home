import React from 'react'
import testImg from '../images/testimonial.png'

const Testimonial = () => {
  return (
    <>
      <h2 className="px-32 pt-32 pb-10 text-4xl">Word on the street</h2>
      <section className="relative pb-72">
        <div className="bg-gray-300 py-20 px-32 w-2/3">
          <p className="w-2/3 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            temporibus quaerat modi dolorem laboriosam optio, autem neque
            eligendi quia dicta odio expedita quo commodi unde perferendis,
            dolorum suscipit beatae nobis quod cum esse quas nemo hic! Tempora
          </p>
          <h3 className="text-2xl">Jejelaye Surulere</h3>
          <p className="uppercase mt-2">Lagos, Nigeria</p>
        </div>

        <div className="absolute right-0 top-10">
          <img src={testImg} alt="" />
        </div>

        <div className="px-32 mt-20">
          <button className="bg-purple-900 text-white font-bold uppercase py-4 px-10 rounded-full">
            Read Story
          </button>
        </div>
      </section>
    </>
  )
}

export default Testimonial
