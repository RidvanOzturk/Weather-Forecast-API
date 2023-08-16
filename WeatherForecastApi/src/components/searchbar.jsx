import React from "react"
import { useState } from "react"
import {AsyncPaginate} from "react-select-async-paginate"
import {geoApiOptions,url} from "../api"

const SearchBar = ({onSearchChange}) => {

  const [search, setSearch] = useState(null)

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  const handleOnChange = (data) => {
    setSearch(data)
    onSearchChange(data);

  }


  return (
    <div>
      
      <AsyncPaginate
      
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />

    </div>
  )
}

export default SearchBar