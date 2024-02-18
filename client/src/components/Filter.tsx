type FilterInterface = {
    name: string;
    value: string;
    category: string;
}

const Filter = (props: FilterInterface) => {
    const { name, value, category } = props;
    return (
        <div className="flex gap-x-2 mb-2">
            <input type="checkbox" name={category} value={name} id={value} />
            <label htmlFor={value}>{name}</label>
        </div>
    )
}

export default Filter