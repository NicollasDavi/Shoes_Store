import React from 'react';
import './style.css';
import Input from '@/app/components/Input';

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title text-2xl mb-5'>Category</h2>

      <div className='flex flex-col'>

      <label htmlFor="Allc" className='sidebar-label-container block relative pl-9 mb-3 cursor-pointer'>
        <input onChange={handleChange} type="radio" name="test" value="" id="Allc"className="absolute cursor-pointer opacity-0" />
        <span className = "checkmark absolute top-0 left-0 h-5 w-5 bg-[#ccc] rounded-3xl"></span>All
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
