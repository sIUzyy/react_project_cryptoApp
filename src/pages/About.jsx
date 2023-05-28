const content = [
    {
        id: 1,
        icon: <MdDescription size={30} />,
        title: 'Description',
        description: 'Bitvortext is a cutting-edge cryptocurrency API-based website that offers real-time data on the top 100 coins in the market.Our mission is to provide users with accurate and up-to-date information, empowering them to stay informed about the dynamic world of cryptocurrencies and make confident investment decisions.'
    },

    {
        id: 2,
        icon: <MdMiscellaneousServices size={30} />,
        title: 'Our Services',
        description: {
            one:'Real-time Market Data: We utilize reliable cryptocurrency APIs to deliver real-time information on the top 100 coins, including current market prices, market capitalization, and trading volumes, ensuring users have access to the latest data for informed decision-making.',
            two: 'User-Friendly Interface: Our website features a user-friendly interface that enables seamless navigation and efficient search functionalities, allowing users to explore and analyze cryptocurrency data effortlessly.',
            three: 'Trust and Security: We prioritize the security and privacy of our users. We strive to provide reliable and accurate data while implementing robust security measures to ensure a safe and trustworthy platform for cryptocurrency enthusiasts and investors.',
        },
    },

    {
        id: 3,
        icon: <AiOutlineEye size={30} />,
        title: 'Our Vision ',
        description: 'At Bitvortext, we aim to be the go-to platform for individuals seeking reliable and real-time information on cryptocurrencies. By offering comprehensive data and a user-friendly experience, we strive to empower users to navigate the cryptocurrency market with confidence and make well-informed decisions that align with their investment goals.'
    },
]

import React, {useContext} from 'react'
import {MdDescription, MdMiscellaneousServices}  from 'react-icons/md'
import {AiOutlineEye} from 'react-icons/ai'
import { Header } from '../context/headerContext'


const About = () => {

    const {
        nav
    } = useContext(Header)
    
  return (
    <div className={!nav ? 'text-white bg-[#121212] max-w-7xl mx-auto py-14 px-5 ' : 'text-white blur max-w-7xl mx-auto py-14 px-5  '}>
        
        <div className='main-container'>

            <h1 className='text-5xl font-h1'>About Bitvortex Cryptocurrency API Website</h1>


            <div className='grid py-5 gap-5 lg:grid-cols-3'>

                {content.map((info) => (
                <div key={info.id} className='col-1 hover:bg-white/20 text-black p-4 rounded-xl'>
                    <span className='text-white'>
                        {info.icon}
                    </span>
                    <h1 className='py-2 text-xl font-h1 text-white'>{info.title}</h1>
                    <p>
                    {typeof info.description === 'string' ? (
                        <p className='text-[#8D8D95] font-footer'>{info.description}</p>
                    ) : (
                        <div className='text-[#8D8D95] font-footer'>
                        <p className='py-2'>{info.description.one}</p>
                        <p className='py-2'>{info.description.two}</p>
                        <p className='py-2'>{info.description.three}</p>
                        </div>
                    )}                        
                    </p>

                </div>
                ))}

            </div>



        </div>
        
        </div>
  )
}

export default About