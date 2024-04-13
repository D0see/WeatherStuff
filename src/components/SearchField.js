import React from 'react'

export default function SearchField({setSearch}) {
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <input type="text" onChange={handleChange}></input>
    )
}
