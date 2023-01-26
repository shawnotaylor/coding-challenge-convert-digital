const ImageLayout = ({ images }) => {

    return (
        <div className="flex flex-col overflow-scroll">
            <div className="flex flex-row gap-3 w-screen">
                {images.map((image, index) => {
                    return (index < 3 &&
                        <div key={index} className="w-full h-full">
                            <img
                                src={image.originalSrc}
                                className="max-w-full h-auto"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageLayout