import React from 'react';

const SearchBar = ({ onSearchChange }) => {


    const onInputChange = event => onSearchChange(event.target.value)

    return (
        <>
            <input onChange={onInputChange} className="form-control mt-5 w-100 radius" type="text" placeholder="Search" aria-label="Search"></input>
        </>
    )
}

export {
    SearchBar
}