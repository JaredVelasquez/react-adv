import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product } from '../interfaces/interfaces';
import "../styles/custom-styles.css";
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart()
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <ProductCard key={product.id} product={product} className="bg-dark text-white"
          onChange = { () => onProductCountChange}
          initialValues = {{
            count: 4,
            maxCount: 10
          }}
          >
            {
              ({reset, isMaxCountReached, count,maxCount, increaseBy}) => {
                return (
                  <>
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                    <button onClick={reset}>Reset</button>
                    <button onClick={ () => increaseBy(-2)}>-2</button>
                    
                    {
                      (!isMaxCountReached && <button onClick={ () => increaseBy(+2)}> +2 </button>)
                    }
                    <span>{count} - {maxCount}</span>
                  </>
                )
              }
            }
        </ProductCard>
        {/* <div className='shiping-cart'>
          
              {
                Object.entries( shoppingCart ).map( ([key,product]) => {
                  
                  <ProductCard key={key} product={product} className="bg-dark text-white" style={{width: '100px'}}
                  onChange = { () => onProductCountChange}>
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                  </ProductCard>
                })
              }

        </div> */}
    </div>
  )
}
