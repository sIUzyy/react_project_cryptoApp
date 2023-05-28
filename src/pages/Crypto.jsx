import React, { useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
import { Header } from '../context/headerContext'

import DOMPurify from 'dompurify'


const CryptoInfo = () => {

    const params = useParams()
    const [cryp, setCryp] = useState({})
    const url = `https://api.coingecko.com/api/v3/coins/${params.id}`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCryp(res.data)
            // console.log(res.data)
        }).catch((err) =>{
            alert(err)
        })
    }, [])

    const {
        nav
    } = useContext(Header)

  return (
    <div className={!nav ? 'text-white bg-[#121212] max-w-7xl mx-auto py-14 px-5' : 'text-white bg-[#121212] max-w-7xl mx-auto py-14 px-5 blur'}>

        <div className='main-container'>

            <div className='bg-[#292D33] w-fit rounded-md'>
            <h1 className='mb-3 font-bold text-sm p-2 '>Rank #{cryp.market_cap_rank}</h1>
            </div>

            <div className='col-1 flex items-center'>
                {cryp.image ?  <img className='w-10 bg-white h-10 rounded-full mr-2' src={cryp.image.small} alt='crypto-image' />: ''}
                <h1 className='mx-2 font-bold md:text-xl'>{cryp.name}</h1>
                <p className='uppercase text-[#8D9798] text-sm '>{cryp.symbol}</p>

            </div>

            <div className='col-2 flex item-center text-3xl my-3'>

                {cryp.market_data ? <h1 className='mr-4 font-bold'>${cryp.market_data.current_price.usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1> : '' }
                
                {cryp.market_data ? (
                <h1 className={cryp.market_data.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}>
                    {cryp.market_data.price_change_percentage_24h < 0 ? (
                    <div className='flex items-center'>
                        <AiOutlineArrowDown className='text-red-500' size={20} />
                        <span className='ml-1'>{cryp.market_data.price_change_percentage_24h.toFixed(1)}%</span>
                    </div>
                    ) : (
                    <div className='flex items-center'>
                        <AiOutlineArrowUp className='text-green-500' size={20} />
                        <span className='ml-1'>{cryp.market_data.price_change_percentage_24h.toFixed(1)}%</span>
                    </div>
                    )}
                </h1>
                ) : ''}

            </div>

            <div className='col-3 my-10 text-sm text-[#8D9798] lg:flex lg:justify-between'>


            <div className='lg:w-2/4 lg:mr-2'>
                <div className='flex justify-between border-b border-[#27272C] mt-2 pb-4'>
                    <h1>Market Cap</h1>
                    {cryp.market_data && cryp.market_data.market_cap.usd && cryp.market_data.market_cap.usd !== null ? (
                        <h1 className='text-white'>${cryp.market_data.market_cap.usd.toLocaleString()}</h1>
                    ) : (
                        <h1 className='text-white'>∞</h1>
                    )}
                </div>

                <div className='flex justify-between border-b border-[#27272C] mt-2 pb-4'>
                    <h1>24 Hour Trading Vol</h1>
                    {cryp.market_data && cryp.market_data.total_volume && cryp.market_data.total_volume.usd !== null ? (
                    <h1 className='text-white'>${cryp.market_data.total_volume.usd.toLocaleString()}</h1>
                    ) : (
                        <h1 className='text-white'>∞</h1>
                    )}

                    
                </div>

            
                {cryp.market_data?.fully_diluted_valuation ? (
                <div className='flex justify-between border-b border-[#27272C] mt-2 pb-4'>
                    <h1>Fully Diluted Valuation</h1>
                    {cryp.market_data.fully_diluted_valuation.usd !== undefined ? (
                    <h1 className='text-white'>
                        ${cryp.market_data.fully_diluted_valuation.usd.toLocaleString()}
                    </h1>
                    ) : (
                    <h1 className='text-white'></h1>
                    )}
                </div>
                ) : null}


                </div>

                <div className='lg:w-2/4 lg:ml-2'>
                <div className='flex justify-between border-b border-[#27272C] mt-2 pb-4'>
                    <h1>Circulating Supply</h1>
                    {cryp.market_data && cryp.market_data.circulating_supply && cryp.market_data.circulating_supply !== null ? (
                        <h1 className='text-white'>${cryp.market_data.circulating_supply.toLocaleString()}</h1>
                    ) : (
                        <h1 className='text-white'>∞</h1>
                    )}
                </div>

                <div className='flex justify-between border-b border-[#27272C] mt-2 pb-4'>
                    <h1>Total Supply</h1>
                    {cryp.market_data && cryp.market_data.total_supply && cryp.market_data.total_supply !== null ? (
                        <h1 className='text-white'>${cryp.market_data.total_supply.toLocaleString()}</h1>
                    ) : (
                        <h1 className='text-white'>∞</h1>
                    )}
                </div>

                <div className='flex justify-between border-b border-[#27272C] mt-2 pb-4'>
                    <h1>Max Supply</h1>
                    {cryp.market_data && cryp.market_data.max_supply && cryp.market_data.max_supply !== null ? (
                        <h1 className='text-white'>${cryp.market_data.max_supply.toLocaleString()}</h1>
                    ) : (
                        <h1 className='text-white'>∞</h1>
                    )}
                </div>
                </div>

            </div>

            <div className='col-4 grid grid-cols-6 justify-items-center my-4 text-sm text-[#8D9798]'>

                <div className='border border-gray-500 w-full'>

                <div className='text-center border-b p-2 border-gray-500 '>
                    <h1>1h</h1>     
                    </div>

                    <div className='text-center p-2'>
                    {cryp.market_data ? <h1 className={cryp.market_data.price_change_percentage_1h_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}>{cryp.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</h1> : ''}    
                    </div>


                </div>

                <div className='border border-gray-500 w-full'>

                <div className='text-center border-b p-2 border-gray-500 '>
                    <h1>24h</h1>     
                    </div>
                    
                    <div className='text-center p-2'>
                    {cryp.market_data ? <h1 className={cryp.market_data.price_change_percentage_24h_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}>{cryp.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</h1> : ''}    

                    </div>


                </div>

                <div className='border border-gray-500 w-full'>
                <div className='text-center border-b p-2 border-gray-500 '>
                    <h1>7d</h1>     
                    </div>

                 <div className='text-center p-2'>
                    {cryp.market_data ? ( <h1 className={cryp.market_data.price_change_percentage_7d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}>{cryp.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</h1>) : ''}
                    </div>


                </div>

                <div className='border border-gray-500 w-full'>
                <div className='text-center border-b p-2 border-gray-500 '>
                    <h1>14d</h1>     
                    </div>

                    
                    <div className='text-center p-2'>
                    {cryp.market_data ? <h1 className={cryp.market_data.price_change_percentage_14d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}>{cryp.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</h1> : ''}    
                    </div>


                </div>

                <div className='border border-gray-500 w-full'>
                <div className='text-center border-b p-2 border-gray-500 '>
                    <h1>30d</h1>     
                    </div>

                    
                    <div className='text-center p-2'>
                    {cryp.market_data ? <h1 className={cryp.market_data.price_change_percentage_30d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}>{cryp.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</h1> : ''}    
                    </div>


                </div>

                <div className='border border-gray-500 w-full'>
                <div className='text-center border-b p-2 border-gray-500 '>
                    <h1>1y</h1>     
                    </div>

                    
                    <div className='text-center p-2'>
                    {cryp.market_data ? <h1 className={cryp.market_data.price_change_percentage_1y_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}>{cryp.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</h1> : ''}    
                    </div>


                </div>
             
            </div>

            <div className='col-5'>

                <h1 className='font-bold mb-2 text-lg md:text-2xl'>What is {cryp.name}?</h1>
                <p className='text-sm text-[#8D9798] text-justify md:text-base' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cryp.description ? cryp.description.en : '')}}>

                </p>
            </div>

        </div>


    </div>
  )
}

export default CryptoInfo