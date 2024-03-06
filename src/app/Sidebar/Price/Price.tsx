import React from 'react'
import './style.css';
import Input from '@/app/components/Input';


const Price:React.FC<{ handleChange: React.ChangeEventHandler<HTMLInputElement> }> = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title text-xl md:text-2xl mb-2 md:mb-5'>Price</h2>

      
      <label htmlFor="Allp" className='sidebar-label-container block relative pl-6 md:pl-9 mb-3 cursor-pointer md:text-lg text-sm'>
        <input onChange={handleChange} type="radio" name="test2" value="" id="Allp"className="absolute cursor-pointer opacity-0" />
        <span className = "checkmark absolute top-0 left-0 w-3 h-3 md:h-5 md:w-5 bg-[#ccc] rounded-3xl"></span>All
      </label>
      
      <Input 
          handleChange={handleChange}
          value="50"
          title="$0-50"
          name="test2" 
          color={undefined}      
      />
      <Input 
          handleChange={handleChange}
          value="100"
          title="$50-100"
          name="test2" 
          color={undefined}      
      />
      <Input 
          handleChange={handleChange}
          value="150"
          title="$100-150"
          name="test2" 
          color={undefined}      
      />
      <Input 
          handleChange={handleChange}
          value="200"
          title="$150-200"
          name="test2" 
          color={undefined}      
      />
    </div>
  )
}

export default Price
