import { useContext, useState, useEffect } from 'react'
import ProductContext from '../../../ProductContextWrapper'

function CartInfo({ contentData }) {
    const { removeItemFromCart, updateQuantity } = useContext(ProductContext);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        setCurrentData(contentData);
    }, [contentData]);

    const handleQuantity = (quantity) => {
        if (currentData.inventory >= quantity) {
            updateQuantity(currentData._id, quantity)
        }
        if (quantity <= 0) {
            removeItemFromCart(currentData._id);
        }
    }

    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row justify-between">
                <div>
                    <h1 className="text-3xl font-semibold mt-5">{currentData.brand}</h1>
                    <h2 className="text-3xl font-light mt-2">{currentData.description}</h2>
                    <div className="mt-5">
                        <p className="text-[18px] font-bold">
                            <span>$</span>{currentData.price}
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
                            {currentData.colors && currentData.colors.length ? 
                                currentData.colors.map((color, index) => (
                                    <div key={index} className="w-[32px] h-[32px] border-2" style={{ backgroundColor: color }}></div>
                                )) 
                                : <></>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse gap-5 my-5 lg:my-5 lg:flex-row">
                    <div className="flex lg:flex-col h-full my-5 items-center justify-between">
                        <button onClick={() => {handleQuantity(currentData.quantity + 1); }} className="flex border order-3 lg:order-1 border-zinc-900 text-3xl pb-2 justify-center items-center w-[45px] h-[45px] hover:bg-slate-500 hover:cursor-pointer">
                            +
                        </button>
                        <p className="order-2">{contentData.quantity}</p>
                        <button onClick={() => {handleQuantity(currentData.quantity - 1); }} className="flex border order-1 lg:order-3 border-zinc-900 text-3xl pb-2 justify-center items-center w-[45px] h-[45px] hover:bg-slate-500 hover:cursor-pointer">
                            -
                        </button>
                    </div>
                    <div className="flex items-center order-1 lg:order-2 w-full lg:max-w-[250px] h-full my-3">
                        <img
                            className="object-fill w-full h-full"
                            src={contentData.gallery[0]}
                            alt="Gallery Photo 0"
                        />
                    </div>
                </div>
            </div>
            <div className="border border-zinc-200 w-full my-[25px] lg:mt-[40px]"></div>
        </div>
    )
}

export default CartInfo