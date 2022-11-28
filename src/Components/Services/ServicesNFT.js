import React from 'react'
import light1 from "../../Assets/light1.png";
import dark1 from "../../Assets/dark1.png";
import dark2 from "../../Assets/dark2.png";
import neon1 from "../../Assets/Neon1.png";
import { AiOutlineArrowRight } from 'react-icons/ai'

const ServicesNFT = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white'>
        <div className='md:w-1/2 w-5/6'>
            <h1 className='text-3xl text-left py-3'>Publish Your NFT Collection On Your Application With Our API</h1>
        </div>
        <div className='flex flex-col md:flex-row md:w-1/2 w-3/4 gap-3'>
            <div className='md:w-1/3 w-7/8 flex flex-col justify-between bg-gray-700 rounded-xl h-[450px]'>
                <img className='p-3' src={light1} width='200' alt='' />
                <div className='p-3'>
                    <h1 className='text-2xl text-left'>
                        Publish your NFT collection with us.
                    </h1>
                    <button className='flex items-center gap-2 hover:gap-4 text-xs duration-300 ease-in py-3'><span className='tracking-wide'>Create Collection</span> <span><AiOutlineArrowRight /></span></button>
                </div>
            </div>
            <div className='md:w-2/3 w-7/8'>
                <div className='flex gap-3'>
                    <div className='flex flex-col justify-between bg-gray-700 rounded-xl md:h-[200px] h-auto w-1/2'>
                        <img className='p-3' src={dark1} width='120' alt=''/>
                        <h3 className='p-3'>
                            No need to follow their design!
                        </h3>
                    </div>
                    <div className='flex flex-col justify-between bg-gray-700 rounded-xl md:h-[200px] h-auto w-1/2'>
                        <img className='p-3' src={neon1} alt='' width='110' />
                        <h3 className='p-3'>
                            We leave the styling up to you.
                        </h3>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center bg-gray-700 rounded-xl mt-4 py-4 md:h-[235px] h-auto'>
                    <div>
                        <h3 className='md:w-2/3 w-full p-3 text-xl'>
                            We believe in simplicity <br/> <span className='text-blue-500'>Create, Publish, Connect!</span>
                        </h3>
                        <button className='flex items-center gap-2 hover:gap-4 duration-300 text-xs p-3 ease-in py-3'><span className='tracking-wide'>Documentation</span> <span><AiOutlineArrowRight /></span></button>
                    </div>
                    <img className='p-3' src={dark2} width='200' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesNFT