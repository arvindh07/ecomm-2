const Categories = () => {
    
    return (
        <div className="col-span-4 bg-gray-50 mr-4 pt-2">
            <h3 className="pl-4 mb-2 font-semibold">Shop by:</h3>
            <div className="flex flex-col pl-6 pr-7">
                <div className="flex gap-x-2 mb-2">
                    <input type="checkbox" name="gender" value="Men" id="men" />
                    <label htmlFor="men">Men</label>
                </div>
                <div className="flex gap-x-2">
                    <input type="checkbox" name="gender" value="Women" id="women" />
                    <label htmlFor="women">Women</label>
                </div>
            </div>
        </div>
    )
}

export default Categories