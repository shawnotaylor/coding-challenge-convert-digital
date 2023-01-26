import { useState, useEffect } from 'react'
const ProductOptions = ({ ProductVariants, selectedVariant, setSelectedVariant }) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColour, setSelectedColour] = useState(null)

    const variantsSizes = getSizes(ProductVariants)
    const variantsColours = getColours(ProductVariants)

    useEffect(() => {
        if (selectedSize === null && selectedColour === null) {
            if (variantsSizes.length === 1 ) {
                setSelectedSize(ProductVariants[0].selectedOptions[0].value)
            }
            if (variantsColours.length === 1) {
                setSelectedColour(ProductVariants[0].selectedOptions[1].value)
            }
        }

    });

    useEffect(() => {
        if (selectedSize !== null && selectedColour !== null ) {
            setSelectedVariant(ProductVariants.filter((variant) => {
                return selectedSize === variant.selectedOptions[0].value && selectedColour === variant.selectedOptions[1].value
            })[0])
        }

    }, [selectedSize]);

    useEffect(() => {
        if (selectedSize !== null && selectedColour !== null ) {
            setSelectedVariant(ProductVariants.filter((variant) => {
                return selectedSize === variant.selectedOptions[0].value && selectedColour === variant.selectedOptions[1].value
            })[0])
        }

    }, [selectedColour]);



    return (
        <div>
            <div className="flex flex-col gap-1.5">
                <h2 className="text-sm">Sizes:</h2>
                <div className="flex flex-row gap-1 mb-1.5">{variantsSizes.map((size, index) => {
                    return (
                        <button
                            key={index}
                            className={`${selectedSize === size ? 'bg-blue-500 text-black': 'bg-black text-white'} text-sm p-2.5 rounded w-20 hover:bg-blue-500 hover:text-black`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    )
                })}</div>
            </div>
            <div className="flex flex-col gap-1.5">
                <h2 className="text-sm">Colour:</h2>
                <div className="flex flex-row gap-1">{variantsColours.map((colour, index) => {
                    return (
                        <button
                            key={index}
                            className={`${selectedColour === colour ? 'bg-blue-500 text-black': 'bg-black text-white'} text-sm  p-2.5 rounded w-20 hover:bg-blue-500 hover:text-black`}
                            onClick={() => setSelectedColour(colour)}
                        >
                            {colour}
                        </button>
                    )
                })}</div>
            </div>
        </div>
    )
}

export default ProductOptions

function getSizes(variants)  {
    const sizes = []
    for (let i = 0; i < variants.length; ++i) {
        if (!sizes.includes(variants[i].selectedOptions[0].value)) {
            sizes.push(variants[i].selectedOptions[0].value)
        }
    }
    return sizes
}

function getColours(variants)  {
    const colours = []
    for (let i = 0; i < variants.length; ++i) {
        if (!colours.includes(variants[i].selectedOptions[1].value)) {
            colours.push(variants[i].selectedOptions[1].value)
        }
    }
    return colours
}
