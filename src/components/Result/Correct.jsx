import React from 'react'

const Correct = ({currentMovie, currentRound, nextRound}) => {
  return (
    <div className='border-2 border-green-600 bg-gradient-to-br from-black via-305% to-transparent to-500% w-[500px] h-[500px] rounded-2xl p-4 drop-shadow-[0_0_5px_rgba(0,255,0,1)] flex flex-col justify-center items-center gap-5'>
        <div className='flex flex-col items-center'>
        <h1 className='text-green-600 font-bold text-5xl '>CORRECT</h1>
        <p className='text-white'>You Nailed It!</p>
        </div>
        <div className='flex gap-15 m-5 '>
            <img className='w-[150px] h-[200px] border  border-white rounded-xl' key={currentMovie.id} src={currentMovie.poster} alt="" />
            <div className='flex flex-col h-[200px]'>
                <h2 className='text-green-600 font-bold text-2xl'>{currentMovie.movie_name}</h2>
                <p className='text-gray-600'>{currentMovie.release_year}</p>
                <p className='text-green-600 text-2xl font-bold mt-auto'>100 POINT</p>
            </div>
        </div>
        <button className='mb-2 text-xl text-white font-extrabold border border-green-300 bg-green-600 px-10 py-1 rounded-full drop-shadow-[0_0_40px_rgba(0,125,0,1)] hover:scale-105 hover:cursor-pointer' onClick={()=>nextRound()}>{currentRound + 1 < 10 ? "NEXT ROUND" : "SHOW RESULT"}</button>
    </div>
  )
}

export default Correct