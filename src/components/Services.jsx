import React from 'react'
import Button from '../layouts/Button'
import ServicesCard from '../layouts/ServicesCard'
import { RiMicroscopeLine } from 'react-icons/ri'
import { MdHealthAndSafety } from 'react-icons/md'
import { FaHeartbeat } from 'react-icons/fa'


const Services = () => {

    const icon1 = < RiMicroscopeLine size={35} className='text-[#36ae9a]'  />
    const icon2 = < MdHealthAndSafety size={35} className='text-[#36ae9a]' />
    const icon3 = < FaHeartbeat size={35} className='text-[#36ae9a]' />


  return (
    <div className='min-h-screen flex flex-col lg:px-32 px-5 pt-24 lg:pt-16 '>
        <div className='flex flex-col items-center lg:flex-row justify-between'>
            <div>
                <h1 className='text-4xl font-semibold text-center lg:text-start'>Nossos Serviços</h1>
                <p className='mt-2 text-center lg:text-start'>
                Com consultas, exames e tratamentos, garantimos qualidade, rapidez e eficiência para cuidar de você e de sua família.
                </p>
            </div>
            <div className='mt-4 lg:mt-0'>
                <Button title="Ver Serviços"  />
            </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 pt-14'>
            < ServicesCard  icon={icon1} title="Teste de laboratório" />
            < ServicesCard  icon={icon2} title="Verificação de saúde" />
            < ServicesCard  icon={icon3} title="Saúde do coração" />
        </div>
    </div>
  )
}

export default Services