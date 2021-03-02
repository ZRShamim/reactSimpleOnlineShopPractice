import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, product) => total + product.price;)
    const productPrice = cart.reduce((total, product) => total + product.price , 0)
    let shipping = 0;
    if(productPrice > 35){
        shipping = 0;
    }
    else if(productPrice > 15){
        shipping = 4.99;
    }
    else if(productPrice > 0){
        shipping = 12.99;
    }

    const tax = productPrice / 10;
    const grandTotal = productPrice + shipping + tax;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(productPrice)}</p>
            <p><small>Shipping Cost: {formatNumber(shipping)}</small></p>
            <p><small>Tax/Vat: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;