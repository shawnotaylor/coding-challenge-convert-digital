import { useState, useEffect } from 'react'

const AddToCartButton = ({ item = null }) => {
    const [addSuccess, setAddSuccess] = useState(false)
    // For an actual cart I'd have this stored else where
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (addSuccess) {
            setTimeout(() => {
                setAddSuccess(false)
            }, 3000)
        }
    }, [addSuccess]);

    return (
        <div className="mb-2">
            <button
                type="button" disabled={item === null} onClick={() => addToCart(item)}
                className="w-full h-10 rounded flex items-center justify-center bg-red-300 disabled:opacity-50 disabled:pointer-events-none"
            >
                {item ? 'Add to cart - $' +  item.priceV2.amount : 'Select product'}
            </button>
            <div className="text-sm text-gray-300 w-full text-center h-3">{addSuccess ? 'Added to cart' : ''}</div>
        </div>
    )

    // Doesn't check for existing cart item and increase qty
    function addToCart (item) {
        if (item) {
            setCart([...cart, item])
            setAddSuccess(true)
        }
    }
}
export default AddToCartButton

