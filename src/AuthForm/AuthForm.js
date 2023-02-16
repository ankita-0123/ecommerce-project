import { useState, useRef ,useContext} from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

import classes from "./AuthForm.module.css";
import CartContext from "../store/cart-context";

const AuthForm = () => {
    const history=useHistory();
  const emailItnputRef = useRef();
  const passwordInputRef = useRef();

  const AuthCtx=useContext(AuthContext);
  const CartCtx=useContext(CartContext)

  const [isLogin, setIsLogin] = useState(true);
   const [isLoading,setIsLoading] = useState(false)
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailItnputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    CartCtx.userIndentifier(enteredEmail)
setIsLoading(true)


let url;
    if (isLogin) {
       url= "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdVdERwY8R0pWYqhtuP3-j712UDKCGo78"
    } else {
        url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdVdERwY8R0pWYqhtuP3-j712UDKCGo78"
    }
    fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false)
        if (res.ok) {
          console.log('logged in')
            return res.json()
            
        } else {
          return res.json().then((data) => {
           let errorMessage = 'Authentication failed!';
        //    if(data&& data.error && data.error.message){
        //     errorMessage = data.error.message;
           throw new Error(errorMessage);
           })
           
        }
      })
      .then((data)=>{
        AuthCtx.login(data.idToken)
        history.replace('/products')
      })
      .catch((err)=>{
        alert(err.message)
      })
    }


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email"  id="email" required ref={emailItnputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
        {!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>} 
        {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >

            {isLogin  ? "Create new account" : "Login with existing account"}

          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;