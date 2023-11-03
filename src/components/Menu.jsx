import React, { useContext } from 'react';
import { DataContext } from '../App';
import QuestionsData from '../data/QuestionsData';

const Menu = () => {
    const {setAppState,setScore} = useContext(DataContext)
    return (
        <div className='flex flex-col justify-center items-center w-150 h-150 bg-violet-50 rounded-lg'>
            <h1 className='text-2xl font-semibold mb-5'>Vocabulary test</h1>
            <h2 className='text-base mb-16'>Total point in this test is {QuestionsData.length} point</h2>
            <button onClick={() => setAppState("quiz") && setScore(0)} className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-10 py-3 text-center mr-2 mb-2'>Let's begin!</button>
        </div>
    );
};

export default Menu;