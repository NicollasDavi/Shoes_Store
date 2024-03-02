import React from 'react';
import './style.css';

const Category = () => {
  return (
    <div>
      <h2 className='sidebar-title text-2xl mb-5'>Category</h2>

      <div className='flex flex-col'>
        <label
          htmlFor="all"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test"
            className="absolute cursor-pointer opacity-0"
            id='all'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          All
        </label>
        <label
          htmlFor="Sneakers"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test"
            className="absolute cursor-pointer opacity-0"
            id='sneakers'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          Sneakers
        </label>
        <label
          htmlFor="flats"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test"
            className="absolute cursor-pointer opacity-0"
            id='flats'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          Flats
        </label>
        <label
          htmlFor="sandals"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test"
            className="absolute cursor-pointer opacity-0"
            id='sandals'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          Sandals
        </label>
        <label
          htmlFor="heels"
          className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer"
        >
          <input
            type="radio"
            name="test"
            className="absolute cursor-pointer opacity-0"
            id='heels'
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl"></span>
          Heels
        </label>

      </div>
    </div>
  );
};

export default Category;
