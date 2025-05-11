import { useState } from "react";
import { useCitySearch } from "../hooks/useCitySearch.js"

export default function CityInput({label, onSelect}) {
    const [query, setQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const {results} = useCitySearch(query);

    const handleSelect = (city) => {
        setQuery(city.name);
        onSelect(city);
        setShowDropdown(false);
    }
    return(
        <div className="relatve w-full">
            <input
                type="text"
                placeholder={label}
                className=""
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setShowDropdown(true);
                }}
            />
            {showDropdown && results.length > 0 && (
                <ul className="absolute z-10 bg-gray-background uppercase text-[18px] font-normal w-full max-h-40 overflow-y-auto">
                    {results.map((city) => (
                        <li
                            key={city._id}
                            className="p-2 cursor-pointer hover:bg-gray-light"
                            onClick = {() => handleSelect(city)}
                        >
                            {city.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}