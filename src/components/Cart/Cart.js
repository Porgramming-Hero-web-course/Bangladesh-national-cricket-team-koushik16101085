import React from 'react';

const Cart = (props) => {
 const cart = props.cart;
    
    const totalSalary = cart.reduce((sum, player) => sum + player.salary,0)
    return (
        <div>
            {/* <h2>This Is Players Added CricketClub: {cart.length}</h2> */}
            <h1>Total Bajat: {totalSalary}</h1>
        </div>
    );
};

export default Cart;