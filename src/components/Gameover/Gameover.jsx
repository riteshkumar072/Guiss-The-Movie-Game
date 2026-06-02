import React from 'react'

const Gameover = ({startGame, goHome,  score}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 border-1 rounded-2xl border-purple-950/50 drop-shadow-[0_0_10px_purple] bg-gradient-to-br from-black via-305% to-transparent to-250%'>
            <div className='text-white text-6xl font-bold py-10'>GAME OVER!</div>
            <div className='border border-white/10 p-5 w-85 text-center rounded-2xl'>
                <p className='font-bold'>YOUR SCORE</p>
                <p className='text-6xl font-bold text-yellow-300'>{score}</p>
            </div>
            <div className='p-10 flex gap-5 '>
                <button className='bg-gradient-to-b from-yellow-300 to-orange-500 px-5 font-extrabold rounded-full w-40 py-1 drop-shadow-[0_0_10px_rgba(145,158,11,1)] hover:scale-105 hover:cursor-pointer acrive:scale-95 border-1 border-white' onClick={()=> startGame()}>PLAY AGAIN</button>
                <button className='border-2 border-purple-950 w-40 py-1 rounded-full font-semibold text-white hover:scale-105 hover:cursor-pointer' onClick={()=>goHome()}>BACK TO HOME</button>
            </div>
        </div>
    )
}

export default Gameover