import React, { useContext, useState } from 'react';
import './AddOrders.css';
import { sendOrder } from '../../Firebase/Firebase';
import { FormContext } from '../../Context/FormContext/FormContext';
import { useCart } from '../../Context/CartContext/CartContext'; // Importa el contexto del carrito

export default function AddOrders() {
    const [orderId, setOrderId] = useState(null);
    const { formData } = useContext(FormContext); // Obtengo los datos del comprador desde el FormContext
    const { cart } = useCart(); // Obtengo el carrito desde el CartContext

    const handleclick = () => {
        // Mapea los productos del carrito para construir los items de la orden
        const items = cart.map(item => ({
            id: item.key, // Usa el "key" del producto
            title: item.title,
            category: item.category,
            type: item.type,  // Si tienes un campo "type", asegúrate de que venga en el carrito
            price: item.price,
            quantity: item.quantity
        }));

        // Calcula el total de la orden
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        // Construye la nueva orden con los datos del comprador y los items del carrito
        const newOrder = {
            buyer: {
                email: formData.email,
                name: formData.name,
                lastname: formData.lastName,
                phone: formData.phone
            },
            date: new Date(),
            items,  // Productos del carrito
            total  // Total calculado
        };

        // Llama a la función sendOrder para enviar la orden a Firebase
        sendOrder(newOrder).then(id => setOrderId(id));
    };

    return (
        <>
            <div>AddOrders</div>
            {formData.name || formData.lastName ||formData.email || formData.phone ? (
            <>
                <h5 className='text-center'>2. Envie su orden de compra.</h5>
                <div className="d-flex justify-content-center align-items-center m-2">
                    <button onClick={handleclick} className='btn btn-dark p-2 px-3 m-3'>
                        Enviar nueva Orden de Compra
                    </button>
                </div>

            <h5 className='text-center'>3. Revise el estado de su orden.</h5>
            <div className="d-flex justify-content-center align-items-center m-2">
                {orderId ? (
                    <div className='bg-secondary-subtle px-3 pt-3 rounded-4'>
                        <p className='orderParagraph'>
                            Tu Orden de compra fue generada bajo el ID: 
                            <span className='orderSpan mx-2 px-1 text-center align-middle bg-success bg-opacity-75 rounded'>
                                {orderId}
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className='bg-secondary-subtle px-3 pt-3 rounded-4'>
                        <p className='orderParagraph'>Aún no generaste tu Orden de compra.</p>
                    </div>
                )}
            </div>
            </>):("")}
        </>
    );
}
