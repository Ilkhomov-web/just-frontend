import React, { useContext } from 'react'
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import { ShopContext } from '../Contex/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import ProductSkleton from '../Components/ProductSkleton/ProductSkleton';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))


  return (
    <div>
      {product ? ( <>
        <BreadCrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox product={product} />
        <RelatedProducts /> </>) : (<ProductSkleton />)}
    </div>
  )
}

export default Product
