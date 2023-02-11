import React,{useContext} from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context'
import CartList from './CartList';


const Cart =(props)=>{
    const cartcntx=useContext(CartContext);
  

    const cartItems = (
        <ul className={classes["cart-name"]}>
          {cartcntx.items.map((item) => (
            <CartList
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </ul>
      );

    return <Modal onClose={props.onClose}>
        <div className={classes['cart-items']}>{cartItems}
        </div>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${cartcntx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
        </Modal>
};
export default Cart;