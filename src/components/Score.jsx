import React, { useContext, useEffect } from 'react';
import { DataContext } from '../App';
import QuestionsData from '../data/QuestionsData';

const Score = () => {
    const {score,setAppState,setScore} = useContext(DataContext)
    const resetApp = () =>{
        setScore(0)
        setAppState('menu')
    }
    
    return (
        <div className='flex flex-col justify-center items-center w-150 h-150 bg-violet-50 rounded-lg'>
            <h1 className='text-2xl font-base mb-5'>สรุปผลคะแนนสอบ</h1>
            <p className='text-lg font-bold mb-40'>{`${score} / ${QuestionsData.length}`}</p>
            <button onClick={resetApp} className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-10 py-3 text-center mr-2 mb-2'>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    );
};

export default Score;