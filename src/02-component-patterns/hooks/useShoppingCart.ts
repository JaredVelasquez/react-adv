import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCart = () =>{
    
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({count, product}: {count:number, product: Product}) => {
    setShoppingCart(oldShoppingCart => {
      if(count === 0){
        const { [product.id]: toDelete, ...rest} = shoppingCart;
        return {...rest}
      }
      return {
        ...oldShoppingCart,
        [product.id] : {...product, count}
      }

    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}