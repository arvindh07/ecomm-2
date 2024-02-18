import { gender } from "../utils/filter"
import Filter from "./Filter"

const Categories = () => {

    return (
        <div className="col-span-4 bg-gray-50 mr-4 pt-2">
            <h3 className="pl-4 mb-2 font-semibold">Shop by:</h3>
            <div className="flex flex-col pl-6 pr-7">
                {gender?.map((gen) => (
                    < Filter key={gen.name} name={gen.name} value={gen.value} category={gen.category} />
                ))}
            </div>
        </div>
    )
}

export default Categories