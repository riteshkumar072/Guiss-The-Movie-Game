import React, { useEffect, useState } from 'react'

const Gamescreen = ({score, setScore, currentMovie, setScreen, currentRound}) => {
    const [timeleft, setTimeleft] = useState(20);
    
    const progress = timeleft/20;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeleft(prev => {
                if (prev == 0) {
                    clearInterval(interval);
                    setScreen("INCORRECT");
                    return 0;
                }
                return prev - 1;
            })
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    const checkAnswer = (selectedOption)=>{
        if(selectedOption === currentMovie.movie_name){
            setScreen("CORRECT");
            setScore(prev => prev + 100)
            return 0;
        }
        setScreen("INCORRECT")
    }


    return (
        <div className='flex flex-col justify-center items-center gap-5 border-1 rounded-2xl w-[500px] h-[500px] p-4 drop-shadow-[0_0_10px_purple] bg-black'>
            <h1>{timeleft}</h1>
            <h1>{currentMovie.movie_name}</h1>
            <div className='flex w-[320px] justify-between'>
                <div className='border-2 rounded-2xl border-purple-950 px-3'><span>ROUND</span><span className='text-purple-500 font-bold'> {currentRound +1}/10</span></div>
                <div className='border-2 rounded-2xl border-purple-950 px-3'><span>SCORE </span><span className='text-yellow-300 font-semibold'>{score}</span></div>
            </div>
            <div className='relative w-[320px] h-[180px] rounded-2xl'>
                <img className='absolute w-full h-full  rounded-2xl' src={currentMovie.movie_image} alt="" />
                <svg className='absolute inset-0 w-full h-full  rounded-2xl'  viewBox="0 0 320 180" >
                    <rect x="0" y="0" width={320} height={180} rx={16} stroke="rgba(255,255,255,0.5)" strokeWidth="8" fill="none" />
                    <rect x="0" y="0" width={320} height={180} rx={16} stroke="yellow" strokeWidth="8" fill="none" strokeDasharray={2 * (320 + 180)} strokeDashoffset={1000*(1-progress)} strokeLinecap="round" className='transition-all duration-1000 ease-linear drop-shadow-[0_0_10px_rgba(255,255,0,1)]'/>
                </svg>
            </div>
            <ul className='w-[320px] grid grid-cols-2 gap-2'>
                {currentMovie.options.map((option, index)=>(<li key={index} onClick={()=> checkAnswer(option)} className='border-1 border-purple-950 p-2 rounded-2xl hover:bg-purple-600/20 hover:scale-105 active:scale-95'>{option}</li>))}
            </ul>
        </div>
    )
}

export default Gamescreen