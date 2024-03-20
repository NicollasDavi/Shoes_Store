import Input from '@/app/components/Input'
import React from 'react'


const Colors:React.FC<{ handleChange: React.ChangeEventHandler<HTMLInputElement> }> = ({handleChange}) => {
  return (
    <div>
      
      <h2 className='text-xl md:text-2xl mb-2 md:mb-5'>Color</h2>
      <label htmlFor="Allco" className='sidebar-label-container block relative pl-6 md:pl-9 mb-3 cursor-pointer md:text-lg text-sm'>
        <input onChange={handleChange} type="radio" name="test1" value="" id="Allco"className="absolute cursor-pointer opacity-0" />
        <span className = "checkmark absolute top-0 left-0 w-3 h-3 md:h-5 md:w-5 bg-[#ccc] rounded-3xl"></span>All
      </label>
      <Input 
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test1"
      color={undefined}
      />
      <Input 
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="test1"
      color={undefined}
      />
      <Input 
      handleChange={handleChange}
      value="red"
      title="red"
      name="test1"
      color={undefined}
      />
      <Input 
      handleChange={handleChange}
      value="green"
      title="Green"
      name="test1"
      color={undefined}
      />
      <Input 
      handleChange={handleChange}
      value="white"
      title="White"
      name="test1"
      color={undefined}
      />
      
    </div>
  )
}

export default Colors