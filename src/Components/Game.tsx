import React, { useState, useRef } from 'react';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const Game = () => {
  const comp = useRef<any>(null);
  const user = useRef<any>(null);
  const resultUser = useRef(0);
  const resultComp = useRef(0);

  // Bu hissə UI-ni yeniləmək üçündür
  const [, setRerender] = useState(0);
  const forceUpdate = () => setRerender(prev => prev + 1);

  const restart = () => {
    comp.current = null;
    user.current = null;
    resultComp.current = 0;
    resultUser.current = 0;
    forceUpdate();
  };

  const handleClick = (userChoice: any) => {
    user.current = userChoice;
    const randomComp = Math.floor(Math.random() * 3) + 1;

    if (randomComp === 1) {
      comp.current = rock;
    } else if (randomComp === 2) {
      comp.current = paper;
    } else {
      comp.current = scissors;
    }

    if (user.current === rock && comp.current === paper) {
      resultComp.current += 1;
    } else if (user.current === rock && comp.current === scissors) {
      resultUser.current += 1;
    } else if (user.current === paper && comp.current === rock) {
      resultUser.current += 1;
    } else if (user.current === paper && comp.current === scissors) {
      resultComp.current += 1;
    } else if (user.current === scissors && comp.current === rock) {
      resultComp.current += 1;
    } else if (user.current === scissors && comp.current === paper) {
      resultUser.current += 1;
    }

    forceUpdate();
  };

  return (
   <div className='bg-[#232323] w-full min-h-screen !px-4 !py-6 flex flex-col items-center'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-white text-3xl md:text-4xl font-extrabold'>SCORE</h1>
        <h2 className='text-white text-2xl md:text-3xl flex gap-2 font-extrabold'>
          <span className='text-[#00FBFF]'>{resultUser.current}</span>:
          <span className='text-[#FFA600]'>{resultComp.current}</span>
        </h2>
        <button
          className='bg-[#00C58A] !px-6 !py-2 text-lg md:text-xl text-white font-semibold rounded'
          onClick={restart}
        >
          Restart
        </button>
      </div>

      <div className='min-h-[30vh] flex items-center justify-center text-white text-lg md:text-2xl font-semibold !mt-6'>
        {user.current == null ? (
          'CHOOSE ONE TO START'
        ) : (
          <div className='flex flex-row items-center gap-4 flex-wrap justify-center'>
  <div className='w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-[#c0bebe] border border-[#7b7878] flex items-center justify-center rounded-[10px]'>
    <img className='w-[45px] md:w-[65px]' src={user.current} alt='User Choice' />
  </div>
  <div className='w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-[#c0bebe] border border-[#7b7878] flex items-center justify-center rounded-[10px]'>
    <img className='w-[45px] md:w-[65px]' src={comp.current} alt='Comp Choice' />
  </div>
</div>

        )}
      </div>

     <div className='flex flex-row justify-center gap-3 !mt-6 flex-wrap'>
  <div
    className='w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-[#c0bebe] border border-[#7b7878] flex items-center justify-center rounded-[10px] hover:bg-[#e2e1e1]'
    onClick={() => handleClick(rock)}
  >
    <img className='w-[40px] md:w-[65px]' src={rock} alt='rock' />
  </div>
  <div
    className='w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-[#c0bebe] border border-[#7b7878] flex items-center justify-center rounded-[10px] hover:bg-[#e2e1e1]'
    onClick={() => handleClick(paper)}
  >
    <img className='w-[40px] md:w-[65px]' src={paper} alt='paper' />
  </div>
  <div
    className='w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-[#c0bebe] border border-[#7b7878] flex items-center justify-center rounded-[10px] hover:bg-[#e2e1e1]'
    onClick={() => handleClick(scissors)}
  >
    <img className='w-[40px] md:w-[65px]' src={scissors} alt='scissors' />
  </div>
</div>

    </div>
  );
};

export default Game;
