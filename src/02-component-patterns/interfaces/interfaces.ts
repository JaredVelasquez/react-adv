import { ReactElement } from "react"
import { Props  as ProductTitleProps} from "../components/ProductTitle"
import { Props  as ProductButtonsPropsI} from "../components/ProductButtons"
import { Props  as ProductImageProps} from "../components/ProductImage"


export interface PropCardProps{
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs) => void
  }
  
  export interface ProductButtonsProps {
    increaseBy: (value: number) => void,
    counter: number
  }
  export interface Product {
    id: string,
    title: string,
    img?: string
  }
  
  export interface ProductContextProps{
    counter: number,
    increaseBy: (value: number) => void,
    product: Product
  }

  export interface ProductCardHOCProps{
    ({ children, product }: PropCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsPropsI) => JSX.Element

  }
  
  export interface onChangeArgs {
    product: Product,
    count: number
  }
  
export interface ProductInCart extends Product{
  count: number
}