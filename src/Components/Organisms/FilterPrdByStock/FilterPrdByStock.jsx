import React from 'react'
import { useDispatch } from 'react-redux'
import { setProductsByStock } from '../../../Redux/Actions/Product/ProductActions'

import FilterContainer from '../../Atoms/FilterContainer'
import Select from '../../Atoms/Select'

const FilterPrdByStock = () => {
    const dispatch = useDispatch()

    const handleChange = e => {
        dispatch(setProductsByStock(e.target.value))
    }

    return (
        <FilterContainer>
            <label htmlFor="stock">Buscar por existencia: </label>
            <Select
                onChange={handleChange}
                name="stock">
                <option value = "">Todo</option>
                <option value = "available">Disponible</option>
                <option value = "not available">No disponible</option>
            </Select>
        </FilterContainer>
    )
}

export default FilterPrdByStock
