import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product } from '../interfaces/interfaces';
import "../styles/custom-styles.css";
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart()
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
{/* 
        <ProductCard product={product1} className="bg-dark">
            <ProductCard.Image img={product1.img}/>
            <ProductCard.Title title={product1.title} className="text-bold"/>
            <ProductCard.Buttons/>
        </ProductCard>
         */}
         {
          products.map( product => {
            <ProductCard key={product.id} product={product} className="bg-dark text-white"
            onChange = { () => onProductCountChange}>
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-bold"/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
          })
         }
        </div>
        <div className='shiping-cart'>
          
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

        </div>
    </div>
  )
}
