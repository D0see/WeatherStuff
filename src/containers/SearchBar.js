import React from 'react';
import SearchField from '../components/SearchField';
import SearchButton from '../components/SearchButton';

export default function SearchBar({className, setSearch, onClick}) {

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className={className}>
        <SearchField onChange={handleChange} />
        <SearchButton onClick={onClick}/>
    </div>
  )
}
