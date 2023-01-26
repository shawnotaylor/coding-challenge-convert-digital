import { useState, useEffect } from 'react'

import ProductDetails from './ProductDetails'
import ImageLayout from './ImageLayout'
import ProductOptions from './ProductOptions'
import AddToCartButton from './AddToCartButton'

const Product = ({ product }) => {
    const [selectedVariant, setSelectedVariant] = useState(null)

    const images = product.images.edges.map((image) => {
        return image.node
    })
    const variants = product.variants.edges.map((variant) => {
        return variant.node
    })

    return (
        <div className="flex flex-col gap-3 w-full">
            <ProductDetails Product={product} />
            <ImageLayout images={images} />
            <ProductOptions ProductVariants={variants} selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant}/>
            <AddToCartButton item={selectedVariant} />
        </div>
    )

}

export default Product