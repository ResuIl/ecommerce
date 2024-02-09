import React from 'react'

function CartInfo() {
  return (
    <div>
        <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div>
            <h1 className="text-3xl font-semibold mt-5">Apollo</h1>
            <h2 className="text-3xl font-light mt-2">Running Short</h2>
            <div className="mt-5">
            <p className="text-[18px] font-bold">
                <span>$</span>50.00
            </p>
            </div>
            <div className="mt-5">
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
        </div>
        <div className="flex flex-col-reverse gap-5 my-5 lg:my-5 lg:flex-row">
            <div className="flex lg:flex-col h-full my-5 items-center justify-between">
            <div className="flex border order-3 lg:order-1 border-zinc-900 text-3xl pb-2 justify-center items-center w-[45px] h-[45px]">
                +
            </div>
            <p className="order-2">1</p>
            <div className="flex border order-1 lg:order-3 border-zinc-900 text-3xl pb-2 justify-center items-center w-[45px] h-[45px]">
                -
            </div>
            </div>
            <div className="flex items-center order-1 lg:order-2 w-full lg:max-w-[250px] h-full my-3">
            <img
                className="object-fill w-full h-full"
                src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
                alt="hehe"
            />
            </div>
        </div>
        </div>
        <div className="border border-zinc-200 w-full my-[25px] lg:mt-[40px]"></div>
    </div>
  )
}

export default CartInfo