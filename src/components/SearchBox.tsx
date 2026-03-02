interface SearchBoxProps{
    filterText: string;
    onFilterTextChange: (newValue: string) => void
}

export default function SearchBox({ filterText, onFilterTextChange} : SearchBoxProps){
    return(
        <div className="flex flex-col gap-1">
            <label className="text-purple-600 font-semibold">Search Employees</label>
            <input
            className="border border-purple-200 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
            type="text"
            value={filterText}
            onChange={(event:React.ChangeEvent<HTMLInputElement>) => onFilterTextChange(event.target.value)}
            placeholder="search by name, dep or rol"
            />
        </div>
    )
}