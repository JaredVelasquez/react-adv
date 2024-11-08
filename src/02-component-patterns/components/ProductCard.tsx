import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProducts } from "../hooks/useProducts";
import { ProductContextProps, PropCardProps } from '../interfaces/interfaces';
export const  ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export const ProductCard = ({children, product, className, style}: PropCardProps) => {
  const {counter, increaseBy} = useProducts();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product
      }}
    >
      <div className={`${styles.productCard} ${className}`}
            style={style}  
      >
          {children}
          {/* <ProductImage img={product.img}/>
          <ProductTitle title={product.title}/>
          <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
      </div>
    </Provider>
  )
}
