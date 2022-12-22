import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteCart } from '../../store/cases/cart/action';
import { createNewOrder } from '../../store/cases/order/action';

const PaypalButton = ({ product, cart, idPayment, orderAddress, number, receiverName }) => {
    const navigate = useNavigate();
    const [paidFor, setPaidFor] = useState(false);
    const [err, setErr] = useState(null);
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.order);

    const handleApprove = (orderID) => {
        // Send a request to backend server to fulfill the order
        const listOrder = [];
        if (!orderAddress) {
            toast.error("Please input all fields!");
            return;
        }
        // Create order
        if (cart && idPayment) {
            cart.map((item) => (
                listOrder.push({
                quantity: item.quantity,
                idBook: item.bookVM.id
                })
            ));
            const order = {
                status: false,
                idPayment: idPayment[0].id,
                orderDetails: listOrder,
                orderAddress: orderAddress,
                receiverName: receiverName,
                number: number,
                total: product.price,
              }
            dispatch(createNewOrder(order));
            if (error) {
                // If the response is error
                setErr("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at clevr@gmail.com for assistance")
            } else {
                // If response is success => set paid to true
                // remove all items in the cart
                dispatch(deleteCart()).then(() => setPaidFor(true));
            }
        } else {
            toast.error("Your cart is empty");
            navigate("/checkout");
        }
    };
    if (paidFor) {
        // redirect user to success page 
        navigate("/order-complete");
    }
    if (err) {
        // Display error message, modal or redirect user to error page
        toast.error(err);
    }
    return (
        <PayPalButtons
            style={{ height: 40 }}
            onClick={(data, actions) => {
                // Validate on button click, client or server side
                const hasAlreadyBoughtProduct = false;

                if (hasAlreadyBoughtProduct) {
                    setErr("You already bought this books. Go to your account to view your list of books");
                    return actions.reject();
                } else {
                    return actions.resolve();
                }
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("Order: ", order);

                handleApprove(data.orderID);
            }}
            onCancel={() => {
                // Display cancel message, modal or redirect user to cancel page or back to cart

            }}
            onError={(err) => {
                setErr(err);
                console.log("Paypal Checkout Error: ",err);
            }}
        />
    );
};

export default PaypalButton;