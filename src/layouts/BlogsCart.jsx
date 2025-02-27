import React from 'react'

const BlogsCart = ({img, headlines}) => {
  return (
    <div className='w-full lg:w-1/4 p-2 shadow-[0_0_3px_rgba(0,0,0,0.24)] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>
        <img className='h-64 md:h-96 lg:h-40 w-full rounded-lg ' src={img} alt="img" />
        <h1 className='text-lg text-center font-semibold'>{headlines}</h1>
        <p className='text-center text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ipsa vel illum placeat, doloremque fugiat. </p>
    </div>
  )
}

export default BlogsCart