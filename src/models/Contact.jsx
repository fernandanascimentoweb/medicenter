import React from 'react'
import Button from '../layouts/Button'

const Contact = ({CloseForm}) => {



  return (
    <div className='fixed inset-0 flex items-center justify-center bg-opacity-50 '>
        <div className='popup-form absolute mt-12 text-black'>
            <form className='w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl'>
                <h1 className='text-4xl font-semibold text-center text-[#36ae9a]'>Reserve Agora</h1>

                <div className='flex flex-col'>
                    <input type="text" name='userFirstName' id='userFirstName' placeholder='Primeiro Nome' className='py-3 px-2 bg-[#d5f2ac] rounded-lg'/>
                </div>

                <div className='flex flex-col'>
                    <input type="text" name='userLastName' id='userLastName' placeholder='Ultimo Nome' className='py-3 px-2 bg-[#d5f2ac] rounded-lg'/>
                </div>

                <div className='flex flex-col'>
                    <input type="email" name='userEmail' id='userEmail' placeholder='Email' className='py-3 px-2 bg-[#d5f2ac] rounded-lg'/>
                </div>

                <div className='flex flex-col'>
                    <input type="number" name='userNumber' id='userNumber' placeholder='Telefone' className='py-3 px-2 bg-[#d5f2ac] rounded-lg'/>
                </div>

                <div className='flex gap-5'>
                    <Button title="Agendar consulta" />
                  <button className='bg-[#36ae9a] text-white px-10 rounded-md active:bg-red-500' onClick={CloseForm}>Fechar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact