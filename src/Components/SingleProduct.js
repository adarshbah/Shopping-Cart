    import React from 'react';
    import { Card, Button} from "react-bootstrap";
import { CartState } from '../context/Context';
    
const SingleProduct = ({ prod }) => {
        
    const {
        state: { cart },
        dispatch,
    } = CartState()
    
    console.log(cart);

    return <div className="products">
        
            <Card border="dark" variant="top">
                <Card.Img variant='top' src={prod.img} alt={prod.name}/>
                <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>₹ {prod.price}</span>
                        <br />  
             <span>{prod.vendor}</span>
            
           </Card.Subtitle>
                    
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
             disabled={!prod.available}
            >
              {prod.avialable===0 ? "Out of Stock" : "Add to Cart"}
              
            </Button>
          )}
                </Card.Body>
               
        </Card>
        <br />
            
        </div>;
    };
    
    export default SingleProduct;
    