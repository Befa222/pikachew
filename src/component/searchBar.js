import React from 'react';
import Select from 'react-select'

const meatList = 
    [
    {value: 'beef', label: 'Beef'},
    {value: 'chicken', label: 'Chicken'},
    {value: 'lamb', label: 'Lamb'},
    {value: 'pork', label: 'Pork'},
    {value: 'duck', label: 'Duck'},
    {value: 'turkey', label: 'Turkey'}
]


const SearchBar = () => (
    <Select
    isMulti
    options={meatList}
    className="basic-multi-select"
    classNamePrefix="select"
    />
)

export default SearchBar;