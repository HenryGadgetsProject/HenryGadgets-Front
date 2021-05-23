import React from 'react'
import { useDispatch } from 'react-redux'
import { setProductsByPrice } from '../../../Redux/Actions/Product/ProductActions'

import FilterContainer from '../../Atoms/FilterContainer'
import Select from '../../Atoms/Select'

const FilterPrdByPrice = () => {
    const dispatch = useDispatch()

    const handleChange = e => {
        dispatch(setProductsByPrice(e.target.value))
    }

    return (
        <FilterContainer>
            <label htmlFor="price">Buscar por precio: </label>
            <Select
                onChange={handleChange}
                name="price">
                <option value = "">Todo</option>
                <option value = "0-20000">Menos de 20.000</option>
                <option value = "20001-40000">Entre 20.001 y 40.000</option>
                <option value = "40001-60000">Entre 40.001 y 60.000</option>
                <option value = "60001-80000">Entre 60.001 y 80.000</option>
                <option value = "80001-1000000">Más de 80.000</option>
            </Select>
        </FilterContainer>
    )
}

export default FilterPrdByPrice
