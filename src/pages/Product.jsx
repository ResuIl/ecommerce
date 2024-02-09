import React from 'react'
import Navbar from '../navbar/Navbar'

function Product() {
  return (
    <>
        <Navbar/>
        <div className="m-10 flex flex-col justify-start gap-14 lg:flex-row mt-[80px]">
            <div className="flex lg:flex-col mx-14 lg:mx-0 order-2 lg:order-1 gap-[30px]">
            <div className="border border-zinc-300 shadow-xl shadow-slate-600 w-[87px] h-[87px]">
                <img
                className="object-cover w-full h-full"
                src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
                alt="Product 1"
                />
            </div>
            <div className="w-[87px] h-[87px]">
                <img
                className="object-cover w-full h-full"
                src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
                alt="Product 2"
                />
            </div>
            <div className="w-[87px] h-[87px]">
                <img
                className="object-cover w-full h-full"
                src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
                alt="Product 3"
                />
            </div>
            </div>
            <div className="flex justify-start px-4 order-1 lg:order-2 w-full max-w-[800px] h-[600px]">
            <img
                className="object-fill lg:object-cover w-full h-full"
                src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
                alt="Product 4"
            />
            </div>
            <div className="flex flex-col mx-14 lg:mx-0 order-3">
            <h1 className="text-3xl font-semibold">Apollo</h1>
            <h2 className="text-3xl font-light">Running Short</h2>
            <div className="mt-10">
                <p className="text-[18px] font-bold">SIZE:</p>
                <div className="flex gap-3">
                <div className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center">
                    <p>XS</p>
                </div>
                <div className="flex border-[1.9px] bg-zinc-900 border-zinc-900 w-[63px] h-[45px] justify-center items-center">
                    <p className="text-white">S</p>
                </div>
                <div className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center">
                    <p>M</p>
                </div>
                <div className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center">
                    <p>L</p>
                </div>
                </div>
            </div>
            <div className="mt-5">
                <p className="text-[18px] font-bold">COLOR:</p>
                <div className="flex gap-3">
                <div className="w-[32px] h-[32px] border-2 border-[#5ECE7B] bg-[#D3D2D5]"></div>
                <div className="w-[32px] h-[32px] border-2 bg-[#2B2B2B]"></div>
                <div className="w-[32px] h-[32px] border-2 bg-[#0F6450]"></div>
                </div>
            </div>
            <div className="mt-10">
                <p className="text-[18px] font-bold">PRICE:</p>
                <p className="text-[18px] font-bold mt-3">
                <span>$</span>50.00
                </p>
            </div>
            <div className="mt-10">
                <button className="bg-[#5ECE7B] text-white w-full max-w-[300px] py-4 font-medium">
                ADD TO CART
                </button>
            </div>
            <div className="mt-10">
                <p className="w-full max-w-[300px] font-medium">
                Find stunning women's cocktail dresses and party dresses. Stand out
                in lace and metallic cocktail dresses and party dresses from all
                your favorite brands.
                </p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Product