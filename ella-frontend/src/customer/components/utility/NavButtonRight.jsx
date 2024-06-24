import React from 'react'

const NavButtonRight = () => {

  const style = { right: '-20px', top: '50%', transform: 'translatey(-50%)' };

  return (
    <div className="absolute rounded-full h-10 w-10 bg-white border text-2xl text-center font-bold border-pink-200 flex items-center justify-center" style={style}>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>


    </div>
  )
}

export default NavButtonRight