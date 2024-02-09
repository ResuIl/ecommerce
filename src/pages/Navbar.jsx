import { useState, useContext } from 'react'
import Logo from "../assets/Logo.svg";
import CartIcon from "../assets/cart.svg";
import ProductContext from '../ProductContextWrapper'

function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    const { cartItems } = useContext(ProductContext);
    return (
        <nav className='m-5'>
            <div className="hidden lg:flex justify-between">
                <ul className="flex w-[50%] gap-8">
                    <li className="flex flex-col text-center w-[70px] h-[56px] group hover:cursor-pointer">
                        <p className="group-hover:text-[#5ECE7B] text-black mx-auto mb-[30px] mt-[26px]">WOMEN</p>
                        <span className="invisible group-hover:visible w-[70px] border border-[#5ECE7B]"></span>
                    </li>
                    <li className="flex flex-col text-center w-[70px] h-[56px] group hover:cursor-pointer">
                        <p className="group-hover:text-[#5ECE7B] text-black mx-auto mb-[30px] mt-[26px]">MEN</p>
                        <span className="invisible group-hover:visible w-[70px] border border-[#5ECE7B]"></span>
                    </li>
                    <li className="flex flex-col text-center w-[70px] h-[56px] group hover:cursor-pointer">
                        <p className="group-hover:text-[#5ECE7B] text-black mx-auto mb-[30px] mt-[26px]">KIDS</p>
                        <span className="invisible group-hover:visible w-[70px] border border-[#5ECE7B]"></span>
                    </li>
                </ul>
                <a href='/'><img src={Logo} className="hover:cursor-pointer mt-[24px] mb-[15px]" alt="my_logo" /></a>
                <ul className="flex w-[50%] items-center justify-end gap-8">
                    <li className="flex">
                        <select className="rounded py-2 px-4 leading-tight focus:outline-none">
                        <option key="$" value="$">
                            $
                        </option>
                        <option key="₼" value="₼">
                            ₼
                        </option>
                        </select>
                    </li>
                    <li>
                        {cartItems.length ? 
                            <a href='/cart' className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white">
                                <img src={CartIcon} className="hover:cursor-pointer w-[20px] h-[20px]" alt="cart_icon" />
                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cartItems.length}</div>
                            </a> :
                            <a href='/cart' className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white">
                                <img src={CartIcon} className="hover:cursor-pointer w-[20px] h-[20px]" alt="cart_icon" />
                            </a> 
                        }  
                    </li>
                </ul>
            </div>
            <div className="flex flex-col lg:hidden">
                <div className="flex h-[75px] items-center justify-between">
                <div className="ml-5">
                    <button
                    onClick={() => {
                        setOpenNav((preVal) => !preVal);
                    }}
                    className="text-black"
                    >
                    ☰
                    </button>
                </div>
                <img
                    src={Logo}
                    className="mt-[24px] mb-[15px] mr-5"
                    alt="my_logo"
                />
                </div>
                <div className={`${openNav ? "" : "hidden"}`}>
                <ul className="flex flex-col items-center mb-[25px] gap-8">
                    <li className="flex flex-col text-center w-[70px] h-[56px] group hover:cursor-pointer">
                        <p className="group-hover:text-[#5ECE7B] text-black mx-auto mb-[30px] mt-[26px]">WOMEN</p>
                        <span className="invisible group-hover:visible w-[70px] border border-[#5ECE7B]"></span>
                    </li>
                    <li className="flex flex-col text-center w-[70px] h-[56px] group hover:cursor-pointer">
                        <p className="group-hover:text-[#5ECE7B] text-black mx-auto mb-[30px] mt-[26px]">MEN</p>
                        <span className="invisible group-hover:visible w-[70px] border border-[#5ECE7B]"></span>
                    </li>
                    <li className="flex flex-col text-center w-[70px] h-[56px] group hover:cursor-pointer">
                        <p className="group-hover:text-[#5ECE7B] text-black mx-auto mb-[30px] mt-[26px]">KIDS</p>
                        <span className="invisible group-hover:visible w-[70px] border border-[#5ECE7B]"></span>
                    </li>
                </ul>
                <ul className="mt-10 flex items-center justify-center gap-16">
                    <li className="flex">
                        <select className="rounded py-2 px-4 leading-tight focus:outline-none">
                            <option key="$" value="$">
                            $
                            </option>
                            <option key="₼" value="₼">
                            ₼
                            </option>
                        </select>
                    </li>
                    <li>
                        <img
                            src={CartIcon}
                            className="w-[20px] h-[20px]"
                            alt="cart_icon"
                        />
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar