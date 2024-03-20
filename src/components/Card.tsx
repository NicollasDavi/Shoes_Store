import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

const Card = ({img, title, star, newPrice, prevPrice}) => {
  return (
    <div>
      <section className='card m-5 border-2 border-solid border-[#ededed] p-5 cursor-pointer'>
          <img src={img} alt="Shoe" className='w-52 mb-4 h-36 object-contain' />
          <div className='card-details'>
            <h3 className='card-title mb-4'>{title}</h3>
            <section className='card-reviews mb-4 flex'>
            {star} {star} {star} {star}
            </section>

            <section className='card-price flex justify-around items-center'>
              <div className='price'>
                <del>{prevPrice}</del> {newPrice}
              </div>

              <div className="bag">
                <BsFillBagHeartFill className='text-[#535353]'/>
              </div>
            </section>
          </div>
        </section>
    </div>
  )
}

export default Card
