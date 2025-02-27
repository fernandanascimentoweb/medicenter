import React from 'react'
import Button from '../layouts/Button'
import homeImg from '../assets/img/home.png'


const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${homeImg})` }}  className='min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white  bg-no-repeat bg-cover opacity-90'>
        <div className='w-full lg:w4/5 space-y-5 mt-10'>
            <h1 className='text-5xl font-bold leading-tight '>
            Capacitando escolhas de saúde para uma vida.
            </h1>
            <p>A MediCenter é uma clínica médica moderna, no Rio de Janeiro, que reúne diversas especialidades em um só lugar. Nosso objetivo é oferecer um atendimento, rápido e completo, conectando pacientes a médicos qualificados em um ambiente acolhedor e eficiente.
            </p>

            <Button title="Ver Serviços" />
        </div>
    </div>
  )
}

export default Home