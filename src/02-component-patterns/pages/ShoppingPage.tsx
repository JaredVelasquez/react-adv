import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

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

        <ProductCard product={product}>
            <ProductCard.Image img={product.img}/>
            <ProductCard.Title title={product.title}/>
            <ProductCard.Buttons/>
        </ProductCard>
        
        <ProductCard product={product}>
            <ProductImage img={product.img}/>
            <ProductTitle title={product.title}/>
            <ProductButtons/>
        </ProductCard>
        </div>
    </div>
  )
}
