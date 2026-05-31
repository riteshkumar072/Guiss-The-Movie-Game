import React from 'react'

const Home = ({startGame}) => {
  return (
    <div className='border-2 rounded-2xl border-purple-500/20 bg-gradient-to-br from-[#180829] to-[#20024c] h-[500px] w-[500px] flex flex-col justify-center items-center'>
      <h1 className='text-7xl md:text-8xl italic  font-bold drop-shadow-[1px_5px_0_rgba(0,0,0,1)] bg-gradient-to-br from-gray-500 to-white bg-clip-text text-transparent' >GUESS</h1>
      <h2 className='text-5xl italic drop-shadow-[1px_1px_1px_rgba(255,255,255,1)] font-bold bg-gradient-to-b from-yellow-300 to-yellow-500  bg-clip-text text-transparent'>THE MOVIE</h2>
      <h3 className='font-semibold text-white mt-5'>----lets fun----</h3>
      
      <button className='bg-gradient-to-b from-yellow-300 to-orange-500 px-5 font-extrabold rounded-full w-40 py-1 drop-shadow-[0_0_10px_rgba(145,158,11,1)] hover:scale-105 hover:cursor-pointer active:scale-95 m-5 border-1 border-white' onClick={()=>startGame()}>PLAY NOW</button>
      
      <button className='border-2 border-purple-950 px-7 py-1 rounded-full font-semibold text-white hover:scale-105 hover:cursor-pointer'>HOW TO PLAY</button>
      <div className='grid-rows-3 mt-10 border-2 border-white/10 w-[480px] h-25 m-5 rounded-2xl'>

      </div>
    </div>
  )
}

export default Home