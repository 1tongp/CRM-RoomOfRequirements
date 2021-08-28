import { Input } from 'antd';
import React from 'react'
const { Search } = Input;

const onSearch = value => console.log(value);



export const SearchBar = () => {
    return (
        <div>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
    )
}

export default SearchBar