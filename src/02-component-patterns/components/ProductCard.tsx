import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProducts } from "../hooks/useProducts";
import { ProductContextProps, PropCardProps } from '../interfaces/interfaces';
export const  ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export const ProductCard = ({children, product, className, style, onChange, initialValues}: PropCardProps) => {
  const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProducts({onChange, product, initialValues});

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`}
            style={style}  
      >
          {children({
            count: counter,
            isMaxCountReached: isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            reset,
            increaseBy
          })}
      </div>
    </Provider>
  )
}
