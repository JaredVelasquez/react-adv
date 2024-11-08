import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import "../styles/custom-styles.css";
export const ShoppingPage = () => {
  const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffe-mug.png'
  }
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

        <ProductCard product={product} className="bg-dark">
            <ProductCard.Image img={product.img}/>
            <ProductCard.Title title={product.title} className="text-bold"/>
            <ProductCard.Buttons/>
        </ProductCard>
        
        <ProductCard product={product} className="bg-dark text-white">
            <ProductImage img={product.img}  className="custom-image"/>
            <ProductTitle title={product.title} className="text-bold"/>
            <ProductButtons className="custom-buttons"/>
        </ProductCard>
        </div>
    </div>
  )
}
