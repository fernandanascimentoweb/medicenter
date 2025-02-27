import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu  } from 'react-icons/ai'
import { Link } from 'react-scroll'
import Contact from '../models/Contact';


const Navbar = () => {

    const [ menu, setMenu] = useState(false);

    const [showForm, setShowForm] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }

    const closeMenu = () => {
        setMenu(false);
    }

    const openForm = () => {
        setShowForm(true);
        setMenu(false)
    }

    const closeForm = () => {
        setShowForm(false);
    }

  return (
    <div className='fixed w-full z-10 text-white'>
        <div>
            <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-[#36ae9a] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <div className='flex flex-row items-center cursor-pointer'>
                    <Link to='home' spy={true} smooth={true} duration={500} >
                        <h1 className='text-2xl font-semibol gap-8d'>MediCenter.</h1>
                    </Link>
                </div>

                <nav className='hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
                    <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer'>
                        Home
                    </Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer'>
                        Sobre
                    </Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className=' hover:text-[#FFC000] transition-all cursor-pointer'>
                        Serviços
                    </Link>
                    <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer'>
                        Medicos
                    </Link>
                    <Link to='blogs' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer'>
                        Blog
                    </Link>
                </nav>

                <div className='hidden lg:flex'>
                    <button className='bg-[#ddB036] text-white px-4 py-2 rounded-md hover:bg-[#FFC000] transition duration-300 ease-in-out' onClick={openForm}>
                        Contato
                    </button>
                </div>


                {showForm && <Contact closeForm={closeForm} />}


                <div className='lg:hidden flex items-center'>
                    {menu ? (
                        <AiOutlineClose size={28} onClick={handleChange} />
                    ): (
                        <AiOutlineMenu size={28} onClick={handleChange} />
                    )}
                </div>

                {/* mobile */}

                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-[#36ae9a] text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer' onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer' onClick={closeMenu}>
                        Sobre
                    </Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className=' hover:text-[#FFC000] transition-all cursor-pointer' onClick={closeMenu}>
                        Serviços
                    </Link>
                    <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer' onClick={closeMenu}>
                        Medicos
                    </Link>
                    <Link to='blogs' spy={true} smooth={true} duration={500} className='hover:text-[#FFC000] transition-all cursor-pointer' onClick={closeMenu}>
                        Blog
                    </Link>

                    <div className='lg:hidden'>
                        <button className='bg-[#ddB036] text-white px-4 py-2 rounded-md hover:bg-[#FFC000] transition duration-300 ease-in-out' onClick={openForm}>
                            Contato
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar