import React from 'react'
import { FiHeart } from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav className='flex border border-b-[#f3f3f3] justify-around items-center p-5 z-999 scroll-ml-8 z-[-2]'>
      <div>
        <input type="text" placeholder='Enter your seacrh shoes.' className='px-5 py-3 border-none bg-[#f7f6f6] outline-none mr-5 rounded relative w-56'/>
      </div>
      <div className='flex'>
        <a href="#" className='text-[97,97,97)]'>
          <FiHeart className='w-6 h-6 ml-8 ' />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='w-6 h-6 ml-8 ' />
        </a>
        <a href="#">
          <AiOutlineUserAdd className='w-6 h-6 ml-8 '/>
        </a>
      </div>
    </nav>
  )
}

export default Nav
