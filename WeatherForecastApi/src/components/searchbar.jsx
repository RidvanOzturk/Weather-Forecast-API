import React from 'react'
import { useState } from 'react'

import {AsyncPaginate} from "react-select-async-paginate"

const SearchBar = ({onSearchChange}) => {

  const [search, setSearch] = useState(null)

  const OPTIONS = [
    {
      value: 1,
      label: "Audi"
    },
    {
      value: 2,
      label: "Mercedes"
    },
    {
      value: 3,
      label: "BMW"
    }
  ];

  const fakeData = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return {
      results: OPTIONS,
      has_more: false
    };
  };
  
  const loadOptions = async () => {
    const response = await fakeData();
  
    return {
      options: response.results,
      hasMore: response.has_more
    };
  };

  const handleChange = (data) => {

    console.log(data);
    setSearch(data)

    onSearchChange(data);

  }

  const [value, setValue] = useState({ value: 1, label: "Audi" });

  return (
    <div>
      
      <AsyncPaginate
      
        placeholder="Type here"
        debounceTimeout={600}
        value={value}
        loadOptions={loadOptions}
        onChange={handleChange}

      />

    </div>
  )
}

export default SearchBar