import React from 'react'
import './style.css';


const Price = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title text-2xl mb-5'>Price</h2>

      <label
          htmlFor="0"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test2"
            className="absolute cursor-pointer opacity-0"
            id='0'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          All
        </label>


        <label
          htmlFor="1"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test2"
            className="absolute cursor-pointer opacity-0"
            id='1'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          $0 - $50
        </label>
        <label
          htmlFor="2"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test2"
            className="absolute cursor-pointer opacity-0"
            id='2'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          $50 - $100
        </label>
        <label
          htmlFor="3"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test2"
            className="absolute cursor-pointer opacity-0"
            id='3'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          $100 - $150
        </label>
        <label
          htmlFor="4"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test2"
            className="absolute cursor-pointer opacity-0"
            id='4'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          $150 - $200
        </label>
    </div>
  )
}

export default Price
