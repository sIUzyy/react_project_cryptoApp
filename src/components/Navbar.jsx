const links = [

    {
    id: 1,
    name: 'About',
    path: '/about'    
    },

    {
    id: 2,
    name: 'Api',
    path: 'https://www.coingecko.com/en/api'    
    },

    {
    id: 3,
    name: 'Disclaimer',
    path: '/disclaimer'    
    },
]

import React,{ useContext} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import { Header } from '../context/headerContext'

const Navbar = () => {

    const {
        nav,
        handleNav
    } = useContext(Header)

    
  return (
    <div className='text-white bg-[#121212] max-w-7xl mx-auto py-4 px-5 '>
        
        <div className='main-container'>

            <div className='col-1 hidden md:flex md:justify-between md:items-center'>

                <div className='flex items-center'>
                    <img className='w-12 h-12 mr-2' src={logo} alt='' />

                    <Link to='/' className='font-h1 text-lg hover:text-[#C2E812]'>
                    Bitvortex
                    </Link>
                </div>

                <div className='flex items-center'>
                <div>
                {links.map((data) => (
                    <Link
                    key={data.id}
                    to={data.path}
                    className='px-4 font-h1 hover:text-[#C2E812]'
                    >
                        {data.name}
                    </Link>
                ))}

                </div>

                {/* <div className='hidden lg:block'>
                    <input
                    type='text'
                    className='w-72 p-2  text-white outline-none bg-[#2F2F2F] rounded-lg'
                    placeholder='Search'
                    
                    >
                        
                    </input>
                </div> */}
                </div>


            </div>

            <div className='col-2 flex justify-between items-center md:hidden'>

            <div className='flex items-center'>
                    <img className='w-12 h-12 mr-2' src={logo} alt='' />

                    <Link to='/' className='font-h1 text-lg'>
                    Bitvortex
                    </Link>
                </div>

                <div onClick={handleNav}>

                    {!nav ?  <RxHamburgerMenu size={30}/> : <AiOutlineClose size={30}/> }

                </div>
            </div>
            <div className='flex justify-center '>
            <div className={!nav ? 'hidden ' : 'bg-[#121212] mt-2 border border-[#27272C] p-6  grid  items-center text-white justify-items-center py-4 gap-4 relative w-11/12 h-72  rounded-xl md:hidden'}>
                {links.map((data) => (
                    <div 
                    key={data.id}
                    className='border-b w-full grid justify-items-center pb-4 border-[#27272C]'>
                    <Link
                    to={data.path}
                    className='px-4 font-h1 hover:text-[#C2E812]'
                    >
                        {data.name}
                    </Link>
                    </div>
                ))}

                </div>

                
                </div>

                {/* <div className='lg:hidden'>
                    <input
                    type='text'
                    className='w-full p-2 mt-5 text-white outline-none bg-[#2F2F2F] rounded-lg'
                    placeholder='Search'
                    
                    >
                        
                    </input>
                </div> */}

        </div>
        
        
        </div>
  )
}

export default Navbar