import { useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number
}

export const useProducts = ({onChange, product, value = 0}: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange)

    const increaseBy = (value : number) => {
        if(isControlled.current){
            return onChange!({count: value, product})
        }
        const newValue = Math.max( counter + value, 0);
        setCounter(prev => Math.max(newValue));
        onChange && onChange({ count: newValue, product});
    }
    return {
        counter,
        increaseBy
    }
}