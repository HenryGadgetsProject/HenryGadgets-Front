import React from 'react'
import { useDispatch } from 'react-redux'
import { setProductsByActive } from '../../../Redux/Actions/Product/ProductActions'

import FilterContainer from '../../Atoms/FilterContainer'
import Select from '../../Atoms/Select'

const FilterPrdByActive = () => {
    const dispatch = useDispatch()

    const handleChange = e => {
        dispatch(setProductsByActive(e.target.value))
    }

    return (
        <FilterContainer>
            <label htmlFor="is_active">Buscar por activo: </label>
            <Select
                onChange={handleChange}
                name="is_active">
                <option value = "">Todo</option>
                <option value = "true">Activo</option>
                <option value = "false">Inactivo</option>
            </Select>
        </FilterContainer>
    )
}

export default FilterPrdByActive
