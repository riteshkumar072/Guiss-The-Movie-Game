import React from 'react'

const Incorrect = ({currentMovie, nextRound, currentRound}) => {
  return (
    <div className='border-2 border-red-600 bg-black w-[500px] h-[500px] rounded-2xl p-4 drop-shadow-[0_0_5px_rgba(255,0,0,1)] flex flex-col justify-center items-center gap-5'>
        <div className='flex flex-col items-center'>
        <h1 className='text-red-600 font-bold text-5xl '>INCORRECT</h1>
        <p className='text-white'>Better Luck Next Time!</p>
        </div>
        <div className='flex gap-15 m-5 '>
            <img className='w-[150px] h-[200px] border border-white' src="" alt="" />
            <div className='flex flex-col h-[200px]'>
                <p className='text-white'>Correct answer is</p>
                <h2 className='text-red-600 font-bold text-2xl'>{currentMovie.movie_name}</h2>
                <p className='text-gray-600'>{currentMovie.release_year}</p>
                <p className='text-red-600 text-2xl font-bold mt-auto'>0 POINT</p>
            </div>
        </div>

        <button className='mb-2 text-xl text-white font-extrabold border border-red-300 bg-red-600 px-10 py-1 rounded-full drop-shadow-[0_0_40px_rgba(125,0,0,1)] hover:scale-105 hover:cursor-pointer active:scale-95 ' onClick={()=>nextRound()}>{currentRound + 1 < 10 ? "NEXT ROUND" : "SHOW RESULT"}</button>
    </div>
  )
}

export default Incorrect