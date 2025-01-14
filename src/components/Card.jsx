import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import {useDispatch} from "react-redux";
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
const Card = ({name,image,id,price,type}) => {

    let dispatch= useDispatch();

  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt="food item image"  className='object-cover h-60 w-full'/>
      </div>
      <div className='text-2xl font-semibold '>
        {name}
      </div>
      <div className='w-full flex justify-between items-center '>
        <div className='text-green-500 text-lg font-bold'>{price}/-</div>
       <div className='flex justify-center items-center gap-2 text-green-500 font-semibold'>{type==='veg'? <LuLeafyGreen /> : <GiChickenOven />
       }
       <span>{type} </span></div> 
      </div>
      <div>
        <button className='w-full border p-2 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-all duration-150' onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1})); toast.success("Item added successfully")}}>Add to Dish</button>
      </div>

    </div>
  )
}

export default Card
