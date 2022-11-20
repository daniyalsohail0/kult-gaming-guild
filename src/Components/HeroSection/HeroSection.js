import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white h-screen'>
        <div className='flex flex-col justify-center items-center'>
            <div className='p-4'>
                <h1 className='text-4xl text-center'>
                    <span className='text-blue-600'>KULT.</span> - Gamer's Den
                </h1>
                <p className=' text-center'>
                    We bring to you the most powerful Blockchain powered gaming launchpad.
                </p>
            </div>
            <div className='flex p-4'>
                <button className='button-49'><span>Earn</span></button>
                <button className='bg-blue-700 shadow-lg shadow-blue-700/50 py-2 px-7 mx-4 cursor-pointer hover:bg-[#2546bd]'><span>Latest IGOs</span></button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-2/4'>
            <p className='p-2'>Powered by</p>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                <img src='./Assets/algorand-logo.png' className='w-[200px]' alt='' />
                <img src='./Assets/python-logo.png' className='w-[200px]' alt='' />
                <img src='./Assets/pyteal-logo.png' className='w-[200px]' alt='' />
                <img src='./Assets/unity-logo.png' className='w-[200px]' alt='' />
            </div>
        </div>
    </div>
  )
}

export default HeroSection