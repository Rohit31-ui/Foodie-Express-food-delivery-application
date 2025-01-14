import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import Card2 from '../components/Card2'
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';




const Home = () => {
 
 let {cate,setCat,input,showCart,setShowCart}=useContext(dataContext);

let items=useSelector(state=>state.cart)

let subTotal=items.reduce((total,item)=>total+item.qty*item.price,0);
console.log(subTotal);
let deliveryFee=20;
let taxes=subTotal*0.5/100;

let total= Math.floor(subTotal+deliveryFee+taxes);


  function filter(category){
    if(category==="All"){
      setCat(food_items);
    }
    else{
      let newList=food_items.filter((item)=>(
        item.food_category===category
      ))
      setCat(newList);
    }
  }

  return (
    <div className='bg-slate-200 w-full min-h-screen '>
      <Nav/>
       {
          !input ? <div className='flex flex-wrap justify-center items-center gap-6 w-[100%] '>
          {
            Categories.map((item)=>{
                  return <div key={item.id} className='w-[120px] h-[130px] bg-white rounded-lg cursor-pointer shadow-xl  hover:bg-green-200 transition-all duration-200' onClick={()=>filter(item.name)}>
                      <div className='flex justify-center items-center my-3'>{item.icon}</div>
                      <div className='flex justify-center items-center font-semibold text-gray-600  hover:text-red-600'>{item.name}</div>
                  </div>
              })
          }
        </div> : null
       }


      

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center pt-8 pb-8'>
          {
           cate.length>0? 
            cate.map((item)=>(
              <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
            )):<div className='text-center mt-8 text-2xl text-green-400 font-semibold'>No item found.... </div>
          }
      </div>
      

  <div className={` w-full md:w-[32vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all flex flex-col items-center duration-1000 overflow-auto ${showCart? "translate-x-0" : "translate-x-full"} `} >
        <header className='w-[100%] flex justify-between items-center '>
            <span className='text-green-400 text-[18px] font-semibold'>Order Items</span>
            <RxCross2 className='w-[20px] h-[30px] hover:text-green-600 cursor-pointer text-green-400 text-[18px] font-semibold' onClick={()=>setShowCart(false)}/>
        </header>

  {items.length>0? <>    
    <div className='w-full mt-9 flex flex-col gap-8'>
        {
          items.map((item)=>(
            <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
          ))
        }

    </div> 
      
      <div className='w-full border-t-2 border-gray-400 border-b-2 mt-7 flex flex-col gap-4 p-8'>

        <div className='w-full flex justify-between items-center'>
          <span className='text-lg text-gray-600 font-semibold'>subTotal</span>
          <span className='text-green-400 font-semibold text-lg'>Rs {subTotal}/-</span>
        </div>
        <div className='w-full flex justify-between items-center'>
        <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
        <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>
        </div>
        <div className='w-full flex justify-between items-center'>
        <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
        <span className='text-green-400 font-semibold text-lg'>Rs {taxes}/-</span>
        </div>

       </div>

       <div className='w-full border-gray-400 mt-2 flex flex-col gap-4 px-8'>
        <div className='w-full flex justify-between items-center'>
        <span className='text-lg text-gray-600 font-semibold'>Total</span>
        <span className='text-green-400 font-semibold text-lg'>Rs {total}/-</span>
        </div>
       </div>

      
        
       
            <button className='w-[80%] mt-5 border p-2 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-all duration-150' onClick={()=>toast.success("order successful")}>Place order</button>
          
      

      </> : <div className='text-center mt-8 text-2xl text-green-400 font-semibold'>Empty Cart....</div>}
   

      </div>
</div>
  )
}

export default Home
