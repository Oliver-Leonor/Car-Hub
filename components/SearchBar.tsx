"use client";

import { useState } from "react";

import { SearchManufacturer } from "./";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const handlSearch = () => {}

    return (
        <form className="searchbar" onSubmit={handlSearch}>
            <div className="searhbar__item">
            <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            /> 
            </div>
        </form>
    )
}

export default SearchBar