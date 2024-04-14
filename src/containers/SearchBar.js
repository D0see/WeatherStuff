import React from 'react';
import SearchField from '../components/SearchField';
import SearchButton from '../components/SearchButton';

export default function SearchBar({className, onChange, onClick}) {

  return (
    <div className={className}>
        <SearchField onChange={onChange} />
        <SearchButton onClick={onClick}/>
    </div>
  )
}
