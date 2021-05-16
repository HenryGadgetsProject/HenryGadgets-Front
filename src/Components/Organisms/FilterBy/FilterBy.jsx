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
            <label htmlFor="filter-by">Buscar por Categoría: </label>
            <Select
                onChange={handleChange}>
                <option value="todas">Todas</option>
                {array.map(item => <option key={item.id}
                    value={item.name}>
                    {item.name}
                </option>)}
            </Select>
        </FilterContainer>
    )
}

export default FilterBy
