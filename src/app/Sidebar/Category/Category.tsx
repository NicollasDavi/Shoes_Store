import React from 'react'

const Category = () => {
  return (
    <div>
      <h2 className='sidebar-title text-2xl mb-5'>Category</h2>


      <div className='flex flex-col '>
        <label htmlFor="" className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer " style={{WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', userSelect: 'none'}}>
        <span className='checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl'></span>All
          <input type="radio" name='test' className='absolute opacity-0 cursor-pointer'/>
        </label>
        <label htmlFor="" className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer" style={{WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', userSelect: 'none'}}>
          <span className='checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl'></span>Sneakers
          <input type="radio" name='test' className='absolute opacity-0 cursor-pointer'/>
        </label>
        <label htmlFor="" className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer" style={{WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', userSelect: 'none'}}>
          <span className='checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl'></span>Flats
          <input type="radio" name='test' className='absolute opacity-0 cursor-pointer'/>
        </label>
        <label htmlFor="" className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer" style={{WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', userSelect: 'none'}}>
          <span className='checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl'></span>Sandals
          <input type="radio" name='test' className='absolute opacity-0 cursor-pointer'/>
        </label>
        <label htmlFor="" className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer" style={{WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', userSelect: 'none'}}>
          <span className='checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-3xl'></span>Hells
          <input type="radio" name='test' className='absolute opacity-0 cursor-pointer'/>
        </label>
      </div>
    </div>
  )
}

export default Category
