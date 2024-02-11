import { useState, useContext, useEffect } from 'react'

import CartWIcon from '../assets/empty_cart.svg'
import Navbar from './Navbar'
import ProductContext from '../ProductContextWrapper'


function Category() {
  const { products, getData, addItemToCart } = useContext(ProductContext);

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
    <div className="px-[25px] ">
      <Navbar/>
      <div>
        <h1 className="text-4xl lg:text-5xl font-light mt-[80px] mb-[40px]">
          Category name
        </h1>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px] gap-x-[10px]">
        {products.length ? 
          products.map((content) => (
            <div key={content._id} className="flex w-full transition-shadow ease-in-out max-w-[385px] group hover:shadow-2xl hover:shadow-slate-900 flex-col p-[16px]">
              <div className="w-full relative max-w-[356px] h-[340px]">
                <a href={`/product/${content._id}`}>
                  <img
                    className="object-cover w-full max-w-[356px] h-[340px]"
                    src={content.gallery[0]}
                    alt={content.description}
                  />
                </a>
                <button onClick={() => { addItemToCart(content); }} className="hidden z-50 group-hover:flex justify-center items-center border border-[#5ECE7B] bg-[#5ECE7B] rounded-full w-[50px] h-[50px] absolute right-5 -bottom-[25px]">
                  <img
                    className="w-[24px] h-[24px] mr-1"
                    src={CartWIcon}
                    alt="cart_white"
                  />
                </button>
              </div>
              <p className="font-light mt-[24px]">{content.title}</p>
              <p className="font-semibold">
                <span>$</span>{content.price}
              </p>
            </div>
          )) : <h1 className='flex justify-center w-screen'>No Content Data Found</h1> 
        }
      </div>
    </div>
    </>
  )
}

export default Category