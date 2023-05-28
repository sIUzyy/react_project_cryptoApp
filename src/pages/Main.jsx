const datas = [
    {
        id: 1,
        name: '#',
    },

    {
        id: 2,
        name: 'Coin',
    },

    {
        id: 3,
        name: 'Price',
    },

    {
        id: 4,
        name: '24h',
    },

    {
        id: 5,
        name: 'Volume',
    },

    {
        id: 6,
        name: 'Market Cap',
    },
]


import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../context/headerContext'
import CryptoInfo from './Crypto'
import style from '../pages/css/style.css'

const Main = () => {

    const {
        nav
    } = useContext(Header)

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en'

const [crypto, setCrypto] = useState([])
const [isLoading, setIsLoading] = useState(true)

const [isMobileScreen, setIsMobileScreen] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobileScreen(window.matchMedia('(max-width: 767px)').matches);
  };

  // Initial check on component mount
  handleResize();

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  //testing section
    const [cryptofiltered, setCryptoFiltered] = useState([])

    useEffect(() => {
      setIsLoading(true);

      axios.get(url).then((res) => {
          setCrypto(res.data)
          setCryptoFiltered(res.data)
          setIsLoading(false);

          // console.log(res.data)
      }).catch((err) =>{
          console.log(err)
          setIsLoading(true);

      })
  
  
  }, [])

  const Search = (e) => {
    const arrCrypto = [...crypto]
    const newCrypto = arrCrypto.filter((cryp) => {
      return cryp.id.startsWith(e.toLowerCase())
    })
    setCryptoFiltered(newCrypto)
    // console.log(newCrypto)
  }

  //testing section end

  return (
    <div className={!nav ?'text-white bg-[#121212] max-w-7xl mx-auto py-0 px-5 ' : 'text-white bg-[#121212] max-w-7xl mx-auto py-14 px-5 blur'}>

      <div className='py-10 w-full'>
      <input
       type='text'
       className='w-full lg:w-[30rem] lg:mx-auto lg:flex  p-2 mt-5 text-white outline-none bg-[#2F2F2F] rounded-lg'
       placeholder='Search'
       onChange={(e) => Search(e.target.value)}
       >
                        
      </input>
      </div>

<div className={isMobileScreen ? 'bg-white/5 border-y border-[#27272C] p-2 grid justify-items-center items-center grid-cols-4' : 'bg-white/5 border-y border-[#27272C] p-2 grid justify-items-center items-center grid-cols-6'}>
      {datas.map((data, index) => {
        if (isMobileScreen && index >= 4) {
          return null; // Do not render the remaining items on mobile
        }

        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
          </div>
        );
      })}
    </div>
    {isLoading ? ( 
        <div className='h-screen flex justify-center items-center'>
        <p>Loading...</p>
        </div>
      ) : (
    cryptofiltered.map((data) => (
    <div key={data.id} className='py-4 text-[#A3A3A3]  border-b border-[#27272C] grid grid-cols-4  justify-items-center items-center md:grid-cols-6 hover:bg-white/5'>
        <div>
            <h1>{data.market_cap_rank}</h1>
        </div>
       

            <div className='grid grid-cols-2 items-center    '>
                <div className='img w-36'>
                  <Link to={`/crypto/${data.id}`} element={<CryptoInfo/>}>
                    <img className='w-6  rounded-full' src={data.image} alt=''/>
                    </Link>
                </div>

                <div className='flex items-center xl:w-[320px]'>
                <Link to={`/crypto/${data.id}`} element={<CryptoInfo/>} className='name text-white   '>{data.name}</Link>
                <h1 className=' text-[11px] uppercase ml-2 hidden  lg:block'>{data.symbol}</h1>

                </div>

            </div>
        <div>
        <h1 className='text-sm'>${data.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
        </div>
        <div className=''>
        <h1 className={data.market_cap_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}>
          {data.market_cap_change_percentage_24h.toFixed(1)}%
</h1>        </div>
        <div className='hidden md:block'>${data.total_volume.toLocaleString()}</div>
        <div className='hidden md:block'>${data.market_cap.toLocaleString()}</div>

    </div>
    ))
    )}


        
        </div>
  )
}

export default Main