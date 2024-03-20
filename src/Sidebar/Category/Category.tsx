import React from 'react';
import './style.css';
import Input from '@/app/components/Input';

const Category:React.FC<{ handleChange: React.ChangeEventHandler<HTMLInputElement> }> = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title text-xl md:text-2xl mb-2 md:mb-5'>Category</h2>

      <div className='flex flex-col'>

      <label htmlFor="Allc" className='sidebar-label-container block relative pl-6 md:pl-9 mb-3 cursor-pointer md:text-lg text-sm'>
        <input onChange={handleChange} type="radio" name="test" value="" id="Allc"className="absolute cursor-pointer opacity-0" />
        <span className = "checkmark absolute top-0 left-0 w-3 h-3 md:h-5 md:w-5 bg-[#ccc] rounded-3xl"></span>All
      </label>

      <Input 
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test" 
          color={undefined}      
      />
      <Input 
          handleChange={handleChange}
          value="falts"
          title="Falts"
          name="test" 
          color={undefined}      
      />
      <Input 
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test" 
          color={undefined}      
      />
      <Input 
          handleChange={handleChange}
          value="Heels"
          title="Heels"
          name="test" 
          color={undefined}      
      />
      </div>
    </div>
  );
};

export default Category;
