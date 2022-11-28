import React from 'react'

const Info = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center py-8'>
        <div className='grid grid-cols-1 md:w-1/2 p-2'>
          <p className='text-white p-2'>Technology</p>
          <h1 className='text-white text-4xl font-semibold p-2'>The most trusted way to build games.</h1>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 md:w-1/2 p-2'>
          <div>
            <p className='text-white p-2 py-4'>
              Kult's SDK is a state-of-the-art blockchain framework that powers the Kult Hub and its rapidly expanding orbit of sovereign chains.
            </p>
            <p className='text-white p-2 py-4'>
              Developers can use the SDK to build innovative applications that create value through exchange with the Kult Hub.
            </p>
          </div>
          <div>
            <p className='text-white text-sm p-2 py-4'>PROOF-OF-STAKE</p>
            <p className='text-white text-6xl font-semibold p-2 py-4'>
              99%
            </p>
          </div>
          <div>
            <p className='text-white text-sm p-2 py-4'>
              Low Ground Value
            </p>
            <p className='text-white text-6xl font-semibold p-2 py-4'>
              $0.01
            </p>
            <p className='text-white text-sm p-2 py-4'>
              Enjoy the lowest ground fee for crypto
            </p>
          </div>
          <div>
            <p className='text-white text-sm p-2 py-4'>
              Fast Transactions
            </p>
            <p className='text-white text-6xl font-semibold p-2 py-4'>
              10 sec
            </p>
            <p className='text-white text-sm p-2 py-4'>
              Transactions confirmed in seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info