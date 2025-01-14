import React, { useState } from 'react'
import image1 from "../assets/image1.avif"
import { ImBin } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty, RemoveItem } from '../redux/cartSlice';

const Card2 = ({name,price,image,id,qty}) => {
 
  let dispatch=useDispatch()

 
  return (
    <div className='w-full h-[120px] shadow-lg p-2 flex justify-between '>
      <div className='w-[60%] h-full  flex gap-5 '>
        <div className='w-[50%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="image" />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5'>
            <div className='text-lg text-gray-600 font-semibold'>{name}</div>
            <div className='w-[95px] h-[50px] bg-slate-400 flex rounded-xl overflow-hidden shadow-xl font-semibold border-2 text-xl border-green-400'>
                <button className='w-[30%] h-full  bg-white text-green-200 hover:bg-gray-200 hover:text-white' onClick={()=>{ qty>1? dispatch(decrementQty(id)):1}} >-</button>
                <span className='w-[40%] h-full flex justify-center items-center bg-slate-200 text-green-400'>{qty}</span>
                <button  className='w-[30%] h-full bg-white text-green-200 hover:bg-gray-200 hover:text-white' onClick={()=>{dispatch(incrementQty(id))}}>+</button>
            </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col justify-start items-end gap-6'>
          <span className='text-xl text-green-400 font-semibold'>{price}/-</span>
          <ImBin className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
        </div>
      </div>
    </div>
  )
}

export default Card2;
