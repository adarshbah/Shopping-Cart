import React from 'react';
import { CartState } from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import './style.css'

const Home = () => {const {
    state: { products },
    productState: { available},
  } = CartState();

  const transformProducts = () => { 
    let sortedProducts = products;


    if (!available) {
      sortedProducts = sortedProducts.filter((prod) => prod.available==(0 || 1));
    }



    // if (searchQuery) {
    //   sortedProducts = sortedProducts.filter((prod) =>
    //     prod.name.toLowerCase().includes(searchQuery)
    //   );
    // }

    return sortedProducts;
  };

    return (
        <div className='home'>
            <Filters/>
            <div className='ProductContainer'>
                {
                    transformProducts().map((prod) => {
                        return <SingleProduct prod={prod} key={prod.id}/>
                    })
                   }
            </div>
        </div>

  );
};

export default Home;
 