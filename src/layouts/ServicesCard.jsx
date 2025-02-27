import React from 'react'

const ServicesCard = ({icon, title}) => {
  return (
    <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[0_0_3px_rgba(0,0,0,0.24)] rounded-l-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out'>
        <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'> {icon} </div>
        <h1 className='font-semibold text-lg'> {title} </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad aspernatur dolores distinctio rem dolore neque non placeat hic corrupti deleniti vero repellendus repellat ullam quod, dit eveniet quibusdam eius dolores doloremque ut corrupti in ducimus sunt! Animi repellendus eveniet cupiditate quia ipsum facilis libero reprehenderit atque beatae? Repellat error accusamus nemo minima illo ex omnis dolor? Natus laborum labore itaque quasi quos dicta soluta, voluptatum, mollitia nemo, sint expedita sit quae sequi rem?
        </p>

        <h3 className='text-[#36ae9a] cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out'>Saber Mais</h3>
    </div>
  )
}

export default ServicesCard