import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProductsByCategoryName } from '../../../Redux/Actions/Product/ProductActions'

import FilterContainer from '../../Atoms/FilterContainer'
import Select from '../../Atoms/Select'

const FilterPrdByCatName = () => {
    const dispatch = useDispatch()

    const category = useSelector(state => state.category.categories)

    const handleChange = e => {
        dispatch(setProductsByCategoryName(e.target.value))
    }

    return (
        <FilterContainer>
            <label htmlFor="category">Categoría</label>
            <Select
                onChange={handleChange}
                name="category">
                <option value = "">Todas</option>
                {category.map(cat => <option key={cat.id}
                    value={cat.name}>
                    {cat.name}
                </option>)}
            </Select>
        </FilterContainer>
    )
}

export default FilterPrdByCatName
