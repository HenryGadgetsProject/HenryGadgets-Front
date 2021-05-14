import React from 'react'
// import { useDispatch } from 'react-redux'
// import { setSortOrder } from '../redux/actions'

import FilterContainer from '../../Atoms/FilterContainer'
import Select from '../../Atoms/Select'

const FilterBy = ({ array, handleChange }) => {
    // const dispatch = useDispatch()
    
    // const handleChange = e => {
    //     dispatch(setSortOrder(e.target.value))
    // }
    
    return (
        <FilterContainer>
            <label htmlFor="sort-by">Ordenar por: </label>
            <Select
                onChange = { handleChange }>
                {array.map(item => <option
                    value={item.id}>
                    {item.name}
                </option>)}
            </Select>
        </FilterContainer>
    )
}

export default FilterBy
