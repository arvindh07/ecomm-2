const Product = () => {
    return (
        <div className="mr-8 mb-8 cursor-pointer border-[1px] rounded-md hover:shadow-lg transition-all">
            {/*
                image
                prod name
                offer price - actual price 
             */}
            <img className="w-full rounded-ss-md rounded-se-md h-[270px] object-cover" src="/blacktshirt.jpg" alt="" />
            <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                    <h4 className="text-lg">Black tshirt</h4>
                    <p className="bg-lime-800 inline-block px-2 py-1 font-bold rounded-md text-white my-2 text-xs">3.4⭐</p>
                </div>
                <p className="flex gap-x-4">
                    <span className="font-bold">500₹</span>
                    <span className="line-through text-gray-700">900₹</span>
                </p>
            </div>
        </div>
    )
}

export default Product