import React from 'react'
import { useDispatch } from 'react-redux'
import { setProductsByRating } from '../../../Redux/Actions/Product/ProductActions'

import FilterContainer from '../../Atoms/FilterContainer'
import Select from '../../Atoms/Select'

const FilterPrdByRating = () => {
    const dispatch = useDispatch()

    const handleChange = e => {
        dispatch(setProductsByRating(e.target.value))
    }

    return (
        <FilterContainer>
            <label htmlFor="rating">Buscar por calificación: </label>
            <Select
                onChange={handleChange}
                name="rating">
                <option value = "">Todo</option>
                <option value = "1">1 Estrella</option>
                <option value = "2">2 Estrellas</option>
                <option value = "3">3 Estrellas</option>
                <option value = "4">4 Estrellas</option>
                <option value = "5">5 Estrellas</option>
            </Select>
        </FilterContainer>
    )
}

export default FilterPrdByRating
