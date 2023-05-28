const data = [
    {
     id: 1,
     name: 'About',
     path: '/about',
    },

    {
     id: 2,
     name: 'API',
     path: 'https://www.coingecko.com/en/api',
    },

    {
     id: 3,
     name: 'Disclaimer',
     path: '/disclaimer',
    },

    
]

const icons =  [
    {
        id: 1,
        icon: <AiOutlineInstagram size={25}/>,
        path: 'https://www.instagram.com/siuzy.web/',
    },
    {
        id: 2,
        icon: <AiOutlineGithub size={25}/>,
        path: 'https://github.com/sIUzyy',
    },
    {
        id: 3,
        icon: <AiFillLinkedin size={25}/>,
        path: 'https://www.linkedin.com/in/justin-peligro-49a07b274/',
    },
]


import React, { useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {

    const [year] = useState(new Date().getFullYear());

     // this function will automatically scroll to the top of a website
     const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }


  return (
    <div className='text-white bg-[#121212] max-w-7xl h-[41rem] flex justify-center items-center mx-auto py-14 px-5 '>
        
        <div className='main-container'>

            <div className='col-1 flex items-center justify-center  '>
                <div>
                    <img className='w-12 h-12' src={logo} alt=' ' />
                </div>

                <div>
                    <h1 className='text-[#D9D7DD] font-h1 text-lg'>Bitvortex</h1>
                    
                </div>

            </div>

<div>
             <p className='text-[#8D8D95] text-center py-4 font-footer'>
                    Bitvortex is a cutting-edge cryptocurrency API-based platform, 
                    providing seamless integration and access to a wide range of digital assets, 
                    empowering developers and businesses to leverage the power of blockchain technology. 
            </p>
            </div>

            <div className='col-2 grid  text-center py-4 gap-4 lg:flex lg:justify-center'>
                {data.map((info) => (
                    <Link
                    onClick={scrollToTop}
                    key={info.id}
                    to={info.path} 
                    className='font-footer text-[#F0F7EE] hover:text-[#C2E812]'>
                    {info.name}
                    </Link>
                ))}
            </div>


            <div className='lg:flex lg:justify-between lg:py-4 '>

            <div className='hidden lg:flex lg:order-2  lg:-ml-32 '>
                    {icons.map((media) => (
                        <Link
                        key={media.id}
                        to={media.path}
                        className='px-2 text-[#8D8D95] hover:text-[#C2E812]'
                        >
                         {media.icon}   
                        </Link>
                    ))}


            </div>


            <div className='col-3 text-center py-4 lg:py-0 lg:order-last '>

                <h1 className='text-[#8D8D95] font-footer' >Developed by: sIUzy</h1>

            </div>


            <div className='col-4  text-center lg:order-1 '>

                <h1 className='text-[#8D8D95] font-footer'>© {year} Bitvortex. All Rights Reserved.</h1>

            </div>
            </div>


        </div>
        
    </div>
  )
}

export default Footer