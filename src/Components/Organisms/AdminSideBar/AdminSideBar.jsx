import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

import FilterPrdByCatName from '../FilterPrdByCatName'
import FilterPrdByStock from '../FilterPrdByStock'
import FilterPrdByActive from '../FilterPrdByActive'
import FilterPrdByPrice from '../FilterPrdByPrice'
import FilterPrdByRating from '../FilterPrdByRating'

const AdminAside = styled.aside`
    background          : var(--aside-home);
    border              : none;
    padding             : 3.5em 2em 2em;

    a {
        align-items     : center;
        cursor          : pointer;
        display         : flex;
        justify-content : flex-start;
        margin          : .5em auto;
        padding         : .5em;
        transition      : all .3s linear;
        width           : 90%;
        &:hover {
            transform   : scale(1.08)
        }
    }

    img {
        border          : none;
        margin-right    : 1.6em;
        outline         : none;
        padding         : 1em;
        width           : 2em;
    }

    span {
        color           : var(--font-color);
        font-size       : 2em;
    }

    .icon-drop-down-filters {
        display         : flex !important;
        ${'' /* cursor          : pointer; */}
        margin          : 1em auto 0;
        ${'' /* z-index         : 700; */}
    }

    div.filters {
        border-top      : .2em solid var(--font-color);
        margin          : 2em auto 0;
        padding         : 1em 0;

        ${'' /* align-items     : center; */}
        display         : none !important;
        ${'' /* flex-direction  : column; */}
        ${'' /* position            : sticky;
        position            : -webkit-sticky; */}
        top             : 14em;

        justify-content : space-between;
        position        : static;
        transition      : all .3s linear;

        h6 {
            margin      : .5em auto;
        }
    }


    ${'' /* =================================================
    MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
    ===================================================== */}
    @media(min-width: 992px) and (max-width: 1199px) {
        grid-column         : 1 / 2;
        width               : 10%;

        img {
            margin          : 1em auto;
        }

        span {
            display         : none;
        }

        .icon-drop-down-filters {
            display         : flex !important;
            margin          : 0 auto;
        }

        div.filters {
            margin          : .5em 0 !important;
            width           : 160%;

            display         : none;
            flex-direction  : column;
            justify-content : space-between;
            position        : static;

            transition      : all .3s linear;

            div {
                width: 90%
            }
        }
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        position            : static;

        a {
            justify-content : center;
        }

        div.filters {
            background      : var(--background-gradient);
        }
    }
`

const DropDownIcon = styled.img`
    width: 2em;
    height: 2em;
    padding: 1em;
    background: var(--icon-drop-down) no-repeat center center / contain;
`
const ProductsIcon = styled.img`
    background: var(--icon-products) no-repeat center center / contain;
`
const CategoriesIcon = styled.img`
    background: var(--icon-categories) no-repeat center center / contain;
`
const UserIcon = styled.img`
    background: var(--icon-users) no-repeat center center / contain;
`
const OrderIcon = styled.img`
    background: var(--icon-order) no-repeat center center / contain;
`
const LocationIcon = styled.img`
    background: var(--icon-location) no-repeat center center / contain;
`
const OfferIcon = styled.img`
    background: var(--icon-offer) no-repeat center center / contain;
`
const AddProductsIcon = styled.img`
    background: var(--icon-add-products) no-repeat center center / contain;
`
const AddCategoriesIcon = styled.img`
    background: var(--icon-add-categories) no-repeat center center / contain;
`
const AddLocationIcon = styled.img`
    background: var(--icon-add-location) no-repeat center center / contain;
`
const AddOfferIcon = styled.img`
    background: var(--icon-add-offer) no-repeat center center / contain;
`
const SalesIcon = styled.img`
    background: var(--icon-sales) no-repeat center center / contain;
`

const AdminSideBar = () => {
    return (
        <AdminAside>
            <Link to='/admin/products'>
                <ProductsIcon />
                <span>Productos</span>
            </Link>
            <Link to='/admin/categories'>
                <CategoriesIcon />
                <span>Categor??as</span>
            </Link>
            <Link to='/admin/users'>
                <UserIcon />
                <span>Usuarios</span>
            </Link>

            <Link to='/admin/orders'>
                <OrderIcon />
                <span>Ordenes</span>
            </Link>
            <Link to='/admin/branches'>
                <LocationIcon />
                <span>Sucursales</span>
            </Link>
            <Link to='/admin/offers'>
                <OfferIcon />
                <span>Ofertas</span>
            </Link>
            <Link to='/admin/product'>
                <AddProductsIcon />
                <span>Agregar Productos</span>
            </Link>
            <Link to='/admin/category'>
                <AddCategoriesIcon />
                <span>Agregar Categor??as</span>
            </Link>
            <Link to='/admin/branch'>
                <AddLocationIcon />
                <span>Agregar Sucursal</span>
            </Link>
            <Link to='/admin/offer'>
                <AddOfferIcon />
                <span>Agregar oferta</span>
            </Link>
            <Link to='/admin/analytics'>
                <SalesIcon />
                <span>Visualizar ventas</span>
            </Link>

            <input type="checkbox" id="btn-drop-down-filters" />
            <label htmlFor="btn-drop-down-filters" className="icon-drop-down-filters"><DropDownIcon /></label>
            <div className="filters">
                <h6>Buscar por: </h6>

                <FilterPrdByCatName />

                <FilterPrdByStock />

                <FilterPrdByActive />

                <FilterPrdByPrice />

                <FilterPrdByRating />
            </div>
        </AdminAside>
    )
}

export default AdminSideBar
