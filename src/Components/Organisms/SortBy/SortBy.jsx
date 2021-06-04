import React from 'react'
import FilterContainer from '../../Atoms/FilterContainer'
import Select from '../../Atoms/Select'

const SortBy = () => {    
    return (
        <FilterContainer>
            <label htmlFor="sort-by">Ordenar por: </label>
            <Select
                // onChange = { handleChange }
                name = "sort-by">
                <option value = "asc">A - Z</option>
                <option value = "desc">Z - A</option>
            </Select>
        </FilterContainer>
    )
}

export default SortBy
