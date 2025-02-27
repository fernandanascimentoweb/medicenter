import React from 'react'
import Button from '../layouts/Button'
import BlogsCart from '../layouts/BlogsCart'
import img1 from '../assets/img/blog1.jpg'
import img2 from '../assets/img/blog2.jpg'
import img3 from '../assets/img/blog3.jpg'
import img4 from '../assets/img/blog4.jpg'
import img5 from '../assets/img/blog5.jpg'
import img6 from '../assets/img/blog6.jpg'


const Blogs = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24'>
        <div className='flex flex-col items-center lg:flex-row justify-between'>
          <div>
            <h1 className='text-4xl font-semibold text-center lg:text-start'>Última postagem</h1>
            <p className='mt-2 text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, pariatur.</p>
          </div>
        
          <div className='mt-4 lg:mt-0'>
            <Button title="Our Articles" />
          </div>
        </div>

        <div className='my-8'>
          <div className='flex flex-wrap justify-center gap-5'>
             < BlogsCart img={img1} headlines="Desvendando os mistérios do sono" />
             < BlogsCart img={img2} headlines="A dieta saudável para o coração" />
             < BlogsCart img={img3} headlines="Compreendendo as vacinas pediátricas" />
             < BlogsCart img={img4} headlines="navegando pela saúde mental" />
             < BlogsCart img={img5} headlines="a importância do exercício relugar" />
             < BlogsCart img={img6} headlines="saúde da pele 101" />
          </div>
        </div>
    </div>
  )
}

export default Blogs