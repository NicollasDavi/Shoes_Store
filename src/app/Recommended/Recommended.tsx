import React from 'react';
import Buttons from '../components/Buttons';

const Recommended:React.FC<{ handleClickHandler: React.ChangeEventHandler<HTMLInputElement> }> = ({ handleClickHandler }) => {
  return (
    <div className='lg:ml-80 md:ml-20 mt-5 ml-44'>
      <h2 className='text-2xl font-bold mb-3'>Recommended</h2>
      <div className='flex flex-wrap gap-2 md:gap-4'>
        <Buttons handleClick={handleClickHandler} value='' title='All Products' />
        <Buttons handleClick={handleClickHandler} value='Nike' title='Nike' />
        <Buttons handleClick={handleClickHandler} value='Adidas' title='Adidas' />
        <Buttons handleClick={handleClickHandler} value='Puma' title='Puma' />
        <Buttons handleClick={handleClickHandler} value='Vans' title='Vans' />
      </div>
    </div>
  );
};

export default Recommended;
