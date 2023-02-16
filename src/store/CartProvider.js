import React,{ useState,useEffect} from "react";

import CartContext from "./cart-context"
import axios from "axios";

const CartProvider=(props)=>{

  const initialUserEmail=localStorage.getItem('userEmail');
    const [items,updateItems]=useState([])
    const [userEmail, setUserEmail] = useState(initialUserEmail)

    
    const userEmailHandler = (email) =>{
      const newUserEmail = email.replace('@', '').replace('.', '')
      setUserEmail(newUserEmail)
      localStorage.setItem('userEmail',newUserEmail);
    }
    
    console.log(userEmail)
    

    const addItemHandler=(item)=>{
        // updateItems([...items,item]);

        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.id === item.id);

        if (idx === -1) {
            updateItems([...items, item]);
        } else {
            itemsCopy[idx].quantity=Number(itemsCopy[idx].quantity)+Number(item.quantity);
            itemsCopy[idx].totalPrice=Number(itemsCopy[idx].totalPrice)*Number(itemsCopy[idx].quantity)
            updateItems(itemsCopy)
        }
        console.log(item)

      axios.post(`https://crudcrud.com/api/2cdd777914b44fde8449b6f3d47eac38/${userEmail}`,item)
    };



    const removeItemHandler = (id) => {};

    const incrementHandler = (item) => {
        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.id === item.id);
        itemsCopy[idx].quantity++;
        updateItems(itemsCopy);
      };
    
      const decrementHandler = (item) => {
        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.id === item.id);
    
        if (idx !== -1 && itemsCopy[idx].quantity < 2 ) {
          itemsCopy.splice(idx, 1);
          updateItems(itemsCopy);
        } else {
          itemsCopy[idx].quantity--;
          updateItems(itemsCopy);
        }
      };

    let totalPrice=0;
    items.forEach((item)=>{
        totalPrice=totalPrice+Number(item.price*item.quantity)
    })
    console.log(totalPrice)


    useEffect(()=>{
      axios
      .get(
        `https://crudcrud.com/api/2cdd777914b44fde8449b6f3d47eac38/${userEmail}`
      ).then((res)=>{
          updateItems(res.data)
          console.log(res.data)
      })
    },[userEmail])

    const CartContexts={
        items:items,
        totalAmount:totalPrice,
        addItem: addItemHandler,
        removeItem:removeItemHandler,
        quantityplus: incrementHandler,
        quantityminus: decrementHandler,
        userIndentifier: userEmailHandler,
    }

    return <CartContext.Provider value={CartContexts}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;