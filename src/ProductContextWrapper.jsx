import { createContext, useReducer, useState } from 'react'
//import { useNavigate } from "react-router-dom";
import { useAuth } from "./provider/authProvider";

const ProductContext = createContext();

export default ProductContext;

// Order basdıqda sonrakı screen yoxdu, user profile ve ya profile üçün hər hansısa page yoxdu

export const ProductContextWrapper = ({children}) => {
    const { token } = useAuth();
    //const navigate = useNavigate();
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
            const productsWithQuantity = results.product.map(product => ({
                ...product,
                quantity: 1
            })); 
            setProducts(productsWithQuantity);
        } catch (error) {
            console.error(error);
        }
    };
    const getSingleData = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/products/${id}`
            );
            const results = await response.json();
            return results.product;
        } catch (error) {
            console.error(error);
        }
    };

    const addItemToCart = (item) => {
        if (token) {
            if (cartItems.find(cartItem => cartItem._id === item._id)) { return }
            const updatedCartItems = [...cartItems, item];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
          //navigate("/login", { replace: true });
        }
    };

    const removeItemFromCart = (id) => {
        if (token) {
            const existingItemIndex = cartItems.findIndex(cartItem => cartItem._id === id);
            if (existingItemIndex === -1) { return }
    
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(existingItemIndex, 1);
    
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
            // navigate("/login", { replace: true });
        }
    }

    const updateQuantity = (id, quantity) => {
        if (token) {
            const productIndex = cartItems.findIndex(item => item._id === id);
            if (productIndex !== -1) {
                const updatedCartItems = [...cartItems];
                updatedCartItems[productIndex].quantity = quantity;
                setCartItems(updatedCartItems);
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            } else {
                console.error('Product not found in the cart.');
            }
        } else {
            // navigate("/login", { replace: true });
        }
    };
    

    const contextData = {
        products: products,
        setProducts: setProducts,
        cartItems: cartItems,
        setCartItems: setCartItems,
        getData: getData,
        getSingleData: getSingleData,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
        updateQuantity: updateQuantity,
    };
    return (
        <ProductContext.Provider value={contextData}>{children}</ProductContext.Provider>
    )
}