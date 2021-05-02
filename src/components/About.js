import React from 'react'
import img1 from '../images/about-1.png'
import img2 from '../images/about-2.png'
import img3 from '../images/about-3.png'
import img4 from '../images/about-4.png'

const About = () => {
  return (
    <>
      <h2 className="px-32 pt-32 pb-10 text-6xl">About Safe Haven</h2>
      <section className="px-32 grid grid-cols-2 gap-10 pb-10">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>

        <div>
          <p className="text-purple-900 mb-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            molestias aliquid illum fuga consequuntur nostrum corrupti, natus,
            veritatis harum esse illo ducimus alias iste sequi delectus facere
            recusandae enim sed explicabo perferendis! Laudantium quibusdam
            voluptatem non quasi veritatis tenetur culpa et consequuntur impedit
            deleniti! Ea ipsum natus accusamus blanditiis. Odio.
          </p>
          <p className="text-purple-900 mb-4 text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            corrupti nesciunt! Non quasi beatae delectus nihil numquam. Veniam
            quisquam, cum iusto maxime, blanditiis non fuga aut, quaerat iste
            eum natus!
          </p>

          <div className="grid grid-cols-3 place-items-center text-center">
            <div>
              <h3 className="font-bold text-6xl mb-1">345</h3>
              <p className="text-purple-900">Areas Covered</p>
            </div>

            <div>
              <h3 className="font-bold text-6xl mb-1">4,656</h3>
              <p className="text-purple-900">Property Listing</p>
            </div>

            <div>
              <h3 className="font-bold text-6xl mb-1">45</h3>
              <p className="text-purple-900">Agents</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
