import React from 'react'
import { FaPlay, FaTwitch, FaTwitter } from 'react-icons/fa'
import { FcGlobe } from 'react-icons/fc'
import { SiDiscord } from 'react-icons/si'
import { FiInstagram } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

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
    </div>
  )
}

export default VideoSection