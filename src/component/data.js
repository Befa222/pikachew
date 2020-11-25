import React from 'react';
import Select from 'react-select'

const options = [
    {value: 'beef', label: 'Beef'},
    {value: 'chicken', label: 'Chicken'},
    {value: 'lamb', label: 'Lamb'}
]

const SearchBar = () => (
    <Select
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
    />
)

export default SearchBar;