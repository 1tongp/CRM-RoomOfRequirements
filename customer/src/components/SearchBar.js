import { Input } from 'antd';
import React from 'react'
import './Customer.css'

const { Search } = Input;

const onSearch = value => console.log(value);

export const SearchBar = () => {
    return (
        <div>
            <Search className='searchBar' placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
    )
}

export default SearchBar