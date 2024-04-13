import React from 'react';
import SearchField from '../components/SearchField';
import SearchButton from '../components/SearchButton';

export default function SearchBar({className, setSearch, onClick}) {
  return (
    <div className={className}>
        <SearchField setSearch={setSearch} />
        <SearchButton onClick={onClick}/>
    </div>
  )
}
