import { createContext, useReducer, useState } from 'react'

const ProductContext = createContext();

export default ProductContext;

export const ProductContextWrapper = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });
    const getData = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/products`
            );
            const results = await response.json();
            setProducts(results.product);
        } catch (error) {
            console.error(error);
        }
    };
    const contextData = {
        products: products,
        setProducts: setProducts,
        cartItems: cartItems,
        setCartItems: setCartItems,
        getData: getData,
    };
    return (
        <ProductContext.Provider value={contextData}>{children}</ProductContext.Provider>
    )
}