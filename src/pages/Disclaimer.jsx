const data = [
    'BitVortex is a cryptocurrency API-based website. Please note that the information provided on this platform is for informational purposes only and should not be considered as financial advice or a recommendation to engage in any specific cryptocurrency transactions. Users are solely responsible for conducting their own research and analysis before making any investment decisions. BitVortex does not guarantee the accuracy, completeness, or timeliness of the data and cannot be held liable for any financial losses or damages as a result of using the website or relying on its content. Cryptocurrency investments carry inherent risks, and users should exercise caution and seek professional advice when necessary.'
]

import React, {useContext} from 'react'
import { AiOutlineWarning } from 'react-icons/ai' 
import { Header } from '../context/headerContext'
const Disclaimer = () => {
    
    const {
        nav
    } = useContext(Header)

  return (
    <div className={!nav ? 'text-white bg-[#121212] max-w-7xl mx-auto py-14 px-5 md:h-screen md:flex md:items-center md:justify-center' : 'text-white bg-[#121212] max-w-7xl mx-auto py-14 px-5 blur md:h-screen md:flex md:items-center md:justify-center'}>
        
        <div className='main-container '>

           

            <div className='text-center py-4'>

            <span className='flex justify-center'>
                <AiOutlineWarning className='text-red-500' size={100} />
            </span>

                <h1 className='font-h1 text-5xl py-2'>
                    Disclaimer
                </h1>
                {data.map((info) => (
                <p className='py-4 font-footer text-[#8D8D95]'>
                    {info}
                </p>
                ))}
            </div>




        </div>
        
        
    </div>
  )
}

export default Disclaimer