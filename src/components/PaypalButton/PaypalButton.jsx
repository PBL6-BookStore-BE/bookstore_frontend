import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeItemFromCart } from '../../store/cases/cart/action';

const PaypalButton = ({ product }) => {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { listCartState } = useSelector((state) => state.cart);

    const handleApprove = (orderID) => {
        // Send a request to backend server to fulfill the order

        // If response is success => set paid to true
        setPaidFor(true);
        // Refresh user's account or subscription status

        // If the response is error
        // => setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at xyz@gmail.com for assistance")
    };
    if (paidFor) {
        // Display success message, modal or redirect user to success page
        toast.success("Thank you for your purchase!");
        window.location.href = "/";
    }
    if (error) {
        // Display error message, modal or redirect user to error page
        toast.error(error);
    }
    return (
        <PayPalButtons
            style={{ height: 40 }}
            onClick={(data, actions) => {
                // Validate on button click, client or server side
                const hasAlreadyBoughtProduct = false;

                if (hasAlreadyBoughtProduct) {
                    setError("You already bought this books. Go to your account to view your list of books");

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
                setError(err);
                console.log("Paypal Checkout Error: ",err);
            }}
        />
    );
};

export default PaypalButton;