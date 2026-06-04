import React from 'react'

const Home = ({startGame}) => {
  return (
    <div className='border-2 rounded-2xl border-purple-500/20 p-10 drop-shadow-[0_0_10px_purple] bg-gradient-to-br from-black via-305% to-transparent to-200% h-[500px] w-[500px]  flex flex-col gap-10 justify-center items-center'>
      <div className='text-center'>
      <h1 className='text-7xl md:text-8xl italic  font-bold drop-shadow-[1px_5px_0_rgba(0,0,0,1)] bg-gradient-to-br from-gray-500 to-white bg-clip-text text-transparent' >GUESS</h1>
      <h2 className='text-5xl italic drop-shadow-[1px_1px_1px_rgba(255,255,255,1)] font-bold bg-gradient-to-b from-yellow-300 to-yellow-500  bg-clip-text text-transparent'>THE MOVIE</h2>
      </div>
      <h3 className='font-semibold text-white'>----lets fun----</h3>
      <button className='bg-gradient-to-br from-purple-800 via-transparent to-purple-800 text-purple-500 border border-purple-950 font-extrabold rounded-full w-60 text-xl py-1  hover:scale-105 hover:cursor-pointer active:scale-95 ' onClick={()=>startGame()}>PLAY NOW</button>
      
      <div className='grid-rows-3  border-2 border-white/10 w-full h-25  rounded-2xl'>

      </div>
    </div>
  )
}

export default Home

// drop-shadow-[0_0_10px_rgba(145,158,11,1)]