import { createContext, useContext, useState } from 'react';
import './CartContext.css'
import { updateProducts } from '../../Firebase/Firebase';
import Swal from 'sweetalert2';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = async (product, quantity) => {
        const existingProduct = cart.find((item) => item.key === product.key);
        
        if (existingProduct) {
            // Actualiza la cantidad del producto existente
            setCart((prevCart) => {
                return prevCart.map((item) =>
                    item.key === product.key
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            });
            // Actualiza el stock en Firebase
            await updateProducts(product.id, { stock: product.stock - quantity });
        } else {
            // Agrega el nuevo producto al carrito
            setCart((prevCart) => [...prevCart, { ...product, quantity }]);
            // Actualiza el stock en Firebase
            await updateProducts(product.id, { stock: product.stock - quantity });
        }
    };

    const removeFromCart = async (productKey) => {
        const productToRemove = cart.find((item) => item.key === productKey);
        if (productToRemove) {
            try {
                // Actualiza el stock en Firebase
                await updateProducts(productToRemove.id, { stock: productToRemove.stock});
                // Elimina el producto del carrito
                setCart((prevCart) =>
                    prevCart.filter((item) => item.key !== productKey)
                );

                Swal.fire({
                    icon: 'success',
                    title: '¡Producto eliminado con éxito!',
                    text: `Usted elimino el producto: ${productToRemove.title} del carrito!`,
                });

            } catch (error) {
                console.error("Error al eliminar el producto del carrito", error);
            }
        }
    };

    const clearCart = async () => {
        try {
            await Promise.all(
                cart.map(async (item) => {                    
                    // Actualiza el stock en Firebase
                    await updateProducts(item.id, { stock: item.stock});
                })
            );

            // Vacía el carrito
            setCart([]);

            Swal.fire({
                icon: 'success',
                title: 'Se vacio con éxito el carrito!',
                text: 'Usted ha vaciado el carrito correctamente.',
            });

        } catch (error) {
            console.error("Error al vaciar el carrito", error);
        }
    };
    

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getTotalItems, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
