import React from 'react'
import { FaPlay, FaTwitch, FaTwitter } from 'react-icons/fa'
import { FcGlobe } from 'react-icons/fc'
import { SiDiscord } from 'react-icons/si'
import { FiInstagram } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import { AiOutlineArrowRight } from 'react-icons/ai'

const VideoSection = () => {
  return (
    <div className='flex flex-col text-white justify-center items-center'>
        <h1 className='text-4xl text-center p-4'>
            Featured Game
        </h1>
        <div className='w-3/4 border-2 border-solid border-blue-700 shadow-xl shadow-blue-700/50 md:h-[500px] h-60 flex justify-center items-center video-section p-4'>
            <FaPlay className='text-blue-700 hover:text-blue-600 text-3xl cursor-pointer' />
        </div>
        <div className='flex md:flex-row flex-col md:justify-between justify-start items-center p-4 w-3/4'>
            <div className='flex gap-2 justify-center items-center'>
                <h1>
                    Pegaxy - Horse Gacing 
                </h1>
                <MdVerified className='text-blue-500' />
            </div>
            <div className='flex gap-2'>
                <FcGlobe className='text-xl cursor-pointer' />
                <SiDiscord className='text-xl cursor-pointer' />
                <FaTwitter className='text-xl cursor-pointer' />
                <FiInstagram className='text-xl cursor-pointer' />
                <FaTwitch className='text-xl cursor-pointer' />
            </div>
        </div>
        <div className='md:w-2/3 flex flex-col justify-center items-center py-16 h-screen'>
            <h1 className="text-blue-700 md:text-5xl text-2xl text-center font-extrabold m-2 p-2 uppercase">
            more than just a launchpad
            </h1>
            <h1 className='text-white md:text-5xl text-3xl text-center font-bold md:py-8 p-4'>
            Subscribe today and stay up-to-date to all important announcements
            </h1>
            <p className='text-white text-center md:p-8 p-4 md:w-2/3'>Deliver the same engaging experience and networking opportunities whether your audience attends virtually or in-person. Contact our team to set up a demo of our platform.</p>
            <button className='flex items-center bg-blue-700 shadow-lg shadow-blue-700/50 text-sm py-2 px-2 mx-4 cursor-pointer hover:bg-[#2546bd]'>
                <span>Subscribe</span>
                <AiOutlineArrowRight className='text-2xl'/>
            </button>
        </div>
    </div>
  )
}

export default VideoSection