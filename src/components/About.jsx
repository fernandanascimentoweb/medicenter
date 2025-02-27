import React from 'react'
import about_img from '../assets/img/about.jpg'


const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5'>
        <div className='w-full lg:w-3/4 space-y-4'>
            <h1 className='text-4xl font-semibold text-center lg:text-start'>Sobre</h1>
            <p className='text-justify lg:text-start'>
             Visão = Ser reconhecida como a principal referência em atendimento médico resolutivo e humanizado na região, impactando positivamente a vida de nossos pacientes e suas famílias.
            </p>
            <p className='text-justify lg:text-start'>
             Missão = Proporcionar acesso a cuidados médicos de qualidade, combinando atendimento humanizado, estrutura moderna e agilidade, para melhorar a saúde e o bem-estar da comunidade em Bonsucesso e arredores.

            </p>
            <p className='text-justify lg:text-start'>
            Inovar no modelo de atendimento médico, conectando tecnologia, conforto e eficiência para oferecer uma experiência que supera as expectativas dos pacientes e médicos.
            Construir um futuro onde a saúde seja tratada de forma integrada, promovendo a prevenção, o diagnóstico precoce e o cuidado contínuo como pilares para uma vida mais saudável e feliz.
            </p>
        </div>

        <div className='w-full lg:w-3/4'>
            <img src={about_img} alt="" className='rounded-lg' />
        </div>
    </div>
  )
}

export default About