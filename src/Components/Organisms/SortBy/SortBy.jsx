import React from 'react'
// import { useDispatch } from 'react-redux'
// import { setSortOrder } from '../redux/actions'

import FilterContainer from '../../Atoms/FilterContainer'
import Select from '../../Atoms/Select'

const SortBy = () => {
    // const dispatch = useDispatch()
    
    // const handleChange = e => {
    //     dispatch(setSortOrder(e.target.value))
    // }
    
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
