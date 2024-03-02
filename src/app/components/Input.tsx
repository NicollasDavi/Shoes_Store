import React from 'react'


const Input = ({ handleChange, value, title, name, color }) => {

  

  return (
        <label
            htmlFor={value}
            className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              className="absolute cursor-pointer opacity-0"
              id={value}
              onChange={handleChange}
              value={value}
            />
              <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#ccc] rounded-3xl"></span>
            {title}
        </label>
  )
}

export default Input
