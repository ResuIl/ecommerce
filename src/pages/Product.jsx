import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'
import ProductContext from '../ProductContextWrapper'

function Product() {
    const { productId } = useParams();
    const { getSingleData, addItemToCart } = useContext(ProductContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getSingleData(productId);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [getSingleData, productId]);

    const renderProductData = () => {
        if (!product) {
            return <div>Loading...</div>;
        }
        else {
            return <>
                <Navbar/>
                <div className="m-10 flex flex-col justify-start gap-14 lg:flex-row mt-[80px]">
                    <div className="flex lg:flex-col mx-14 lg:mx-0 order-2 lg:order-1 gap-[30px]">
                        <div className="border border-zinc-300 shadow-xl shadow-slate-600 w-[87px] h-[87px]">
                            <img
                                className="object-cover w-full h-full"
                                src={product.gallery[0]}
                                alt="Product 1"
                            />
                        </div>
                        {product.gallery.length ? 
                            product.gallery.slice(1).map((content) => (
                                <div key={content} className="w-[87px] h-[87px]">
                                    <img
                                        className="object-cover w-full h-full"
                                        src={content}
                                        alt="Product 2"
                                    />
                                </div>
                            )) : <></>
                        }
                        
                    </div>
                    <div className="flex justify-start px-4 order-1 lg:order-2 w-full max-w-[800px] h-[600px]">
                        <img
                            className="object-fill lg:object-cover w-full h-full"
                            src={product.gallery[0]}
                            alt="Product 4"
                        />
                    </div>
                    <div className="flex flex-col mx-14 lg:mx-0 order-3">
                    <h1 className="text-3xl font-semibold">{product.brand}</h1>
                    <h2 className="text-3xl font-light">{product.description}</h2>
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
                        <span>$</span>{product.price}
                        </p>
                    </div>
                    <div className="mt-10">
                        <button onClick={() => { addItemToCart(product); }} className="bg-[#5ECE7B] text-white w-full max-w-[300px] py-4 font-medium">
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
        }
    }

    return (
        renderProductData()
    )
}

export default Product