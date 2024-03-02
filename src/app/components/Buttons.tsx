import React from 'react'

const Buttons = ({handleClick, value, title}) => {
  return (
    <button onClick={handleClick} value={value} className='px-5 py-2 mr-2 bg-transparent border border-solid border-[#ccc] rounded-md cursor-pointer'>{title}</button>
  )
}

export default Buttons
