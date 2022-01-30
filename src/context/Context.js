
   
import { createContext, useContext, useReducer } from "react";
import { cartReducer,productReducer } from "./Reducer";
import { values } from "../Data/values";
const Cart = createContext();

const Context = ({ children }) => {
  const products = values

    const [state, dispatch] = useReducer(cartReducer, {
     products: products,
      cart:[]
    });
    const [productState, productDispatch] = useReducer(productReducer, {
        Available: 1,
      });
    

    console.log(products);
    console.log(state);

  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
      {children}
    </Cart.Provider>
  );
};



export const CartState = () => {
  return useContext(Cart);
};

export default Context;
