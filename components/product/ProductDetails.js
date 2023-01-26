const ProductDetails = ({ Product }) => {
    return (
        <div className="flex flex-col">
            <div className="flex mb-5">
                <h1 className="text-xl font-medium">{Product.title}</h1>
            </div>
            <div className="mb-5">
                <div className="flex flex-col">
                    <h2 className="text-sm font-medium text-gray-900 underline mb-1">Details</h2>
                    <div>
                        <p className="text-sm text-gray-600">{Product.description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails