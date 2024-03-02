import Input from '@/app/components/Input'
import React from 'react'

const Colors = ({handleChange}) => {
  return (
    <div>
      
      <h2 className='text-2xl mb-5'>Color</h2>
      <label htmlFor="Allco" className='sidebar-label-container block relative pl-9 mb-3 cursor-pointer'>
        <input onChange={handleChange} type="radio" name="test1" value="" id="Allco"className="absolute cursor-pointer opacity-0" />
        <span className = "checkmark absolute top-0 left-0 h-5 w-5 bg-[#ccc] rounded-3xl"></span>All
      </label>
      <Input 
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test1"
      color="black"
      />
      <Input 
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="test1"
      color="Blue"
      />
      <Input 
      handleChange={handleChange}
      value="red"
      title="red"
      name="test1"
      color="red"
      />
      <Input 
      handleChange={handleChange}
      value="green"
      title="Green"
      name="test1"
      color="green"
      />
      <Input 
      handleChange={handleChange}
      value="white"
      title="White"
      name="test1"
      color="white"
      />
      
    </div>
  )
}

export default Colors