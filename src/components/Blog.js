import React, { useState } from 'react'
import data from '../data/blog'

const Blog = () => {
  // eslint-disable-next-line
  const [posts, setPosts] = useState(data)

  return (
    <>
      <div className="px-32 pt-32 pb-10 flex items-center justify-between">
        <h2 className="text-4xl">Blog Posts</h2>
        <p>View all blog posts</p>
      </div>

      <section className="px-32 grid grid-cols-3 gap-10">
        {posts.map((post) => {
          const { id, image, desc, tag, date } = post

          return (
            <div key={id} className="px-4 border py-5 rounded-lg">
              <img src={image} alt="" className="rounded-lg w-full" />
              <h4 className="font-bold my-2">{desc}</h4>
              <div className="flex items-center justify-between">
                <p className="text-sm bg-gray-200 text-gray-900 px-2 py-1 rounded-lg">
                  {tag}
                </p>
                <p className="text-sm text-purple-900">{date}</p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Blog
