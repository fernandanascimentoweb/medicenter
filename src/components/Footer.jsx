import React from 'react'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <div className='bg-[#36ae9a] text-white rounded-t-3xl mt-8 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-xl pb-4'>MediCenter.</h1>
                <p className='text-sm'>
                Nossa equipe de médicos dedicados, cada um especializado em áreas exclusivas, como ortopedia, cardiologia, pediatria, neurologia, dermatologia e muito mais.
                </p>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Sobre</h1>
                <nav className='flex flex-col gap-2'>
                    <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer'>
                        Sobre
                    </Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className=' hover:text-[#FFC000] transition-all cursor-pointer'>
                        Serviços
                    </Link>
                   <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer' >
                       Medicos
                   </Link>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0' >Serviços</h1>
                <nav className='flex flex-col gap-2'>
                    <Link to='services' spy={true} smooth={true} duration={500} className=' hover:text-[#FFC000] transition-all cursor-pointer'>
                    Teste de laboratório
                    </Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className=' hover:text-[#FFC000] transition-all cursor-pointer'>
                    Verificação de saúde
                    </Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className=' hover:text-[#FFC000] transition-all cursor-pointer'>
                    Saúde do coração
                    </Link>
                </nav>
            </div>
            <div className='w-full md:w-1/4'>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contato</h1>
                <nav className='flex flex-col gap-2'>
                    <Link to='/' spy={true} smooth={true} duration={500} className=' hover:text-[#FFC000] transition-all cursor-pointer'>
                        Rua do centro 458 , centro - Rio de Janeiro
                    </Link>
                    <Link to='/' spy={true} smooth={true} duration={500} className=' hover:text-[#FFC000] transition-all cursor-pointer'>
                        support@medicenter.com
                    </Link>
                    <Link to='/' spy={true} smooth={true} duration={500} className=' hover:text-[#FFC000] transition-all cursor-pointer'>
                        +552100000-0000
                    </Link>

                </nav>
            </div>
        </div>
        <div>
            <p className='text-center py-4 '>©Copyright developed by 
                <span className='text-[#FFC000]'> Fernanda Marino</span> | All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer