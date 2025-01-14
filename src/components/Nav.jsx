import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { food_items } from '../food';
import { dataContext } from '../context/UserContext';
import { useSelector } from 'react-redux';

const Nav = () => {

let {input,setInput,cate,setCat,showCart,setShowCart}=useContext(dataContext);

let items=useSelector(state=>state.cart);
console.log(items)

useEffect(()=>{
  let newList=food_items.filter((item)=>item.food_name.toLowerCase().includes(input));
  setCat(newList);
},[input])



  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8 '>
     <div className='w-[50px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-xl'>
      <MdFastfood className='w-[60%] h-[60%] text-green-500 cursor-pointer'/>

     </div>


     <form className='flex w-[45%] md:w-[70%] h-[50%] bg-white shadow-xl flex items-center gap-3 rounded-lg p-4' onSubmit={(e)=>e.preventDefault()}>
        <FaSearch className='mx-3 text-green-500 cursor-pointer'/>
        <input type="text" placeholder='search Items...' onChange={(e)=>setInput(e.target.value)} value={input} className='w-[100%] outline-none text-16px md:text-[20px]'/>
     </form>

     <div className='w-[50px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-xl relative' onClick={()=>setShowCart(true)}>
        <span className='absolute top-0 right-1 text-green-500 font-semibold'>{items.length}</span>
         <FiShoppingBag className='w-[60%] h-[60%] text-green-500 cursor-pointer'/>
     </div>
    </div>
  )
}

export default Nav
