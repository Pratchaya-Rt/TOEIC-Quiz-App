import React, { useContext, useEffect, useState } from 'react';
import QuestionsData from "../data/QuestionsData"
import { DataContext } from '../App';

const Quiz = () => {
    //console.log(QuestionsData);
    const [current,setCurrent] = useState(0)
    const [selectChoice,setSelectChoice] =useState('')
    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer = () =>{
        if(selectChoice!= ""){
            if(selectChoice === QuestionsData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }

    const nextQuestion= () => {
        setSelectChoice("")
        if(current ===QuestionsData.length-1){
            setAppState("score")
        }

        setCurrent(current+1)
    }

    return (
        <div className='flex flex-col justify-center items-center w-150 h-150 bg-violet-50 rounded-lg'>
            <h1 className='text-2xl font-semibold'>{QuestionsData[current].question}</h1>
            <div className='flex flex-col gap-5 mt-20'>
                <button onClick={()=>setSelectChoice("A")} className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoice("B")} className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoice("C")} className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoice("D")} className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>{QuestionsData[current].D}</button>
            </div>
            <p className='mt-10'>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
        
    );
};

export default Quiz;