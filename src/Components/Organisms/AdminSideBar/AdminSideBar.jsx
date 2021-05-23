import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const AdminAside = styled.aside`
    align-items : center;
    background  : black;
    border      : none;
    min-height  : 100%;
    outline     : none;
    padding     : 2em;

    a {
        align-items     : center;
        cursor          : pointer;
        display         : flex;
        justify-content : flex-start;
        margin          : 1em auto;
        padding         : 1em;
        transition      : .5s;
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
        color           : #FFFFFF;
        font-size       : 2em;
    }


    ${'' /* =================================================
    MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
    ===================================================== */}
    @media(min-width: 992px) and (max-width: 1199px) {
        img {
            margin      : 1em auto;
        }

        span {
            display     : none;
        }
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        a {
            justify-content : center;
        }
    }
`

const ProductIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:tag.svg?color=white') no-repeat center center / contain;
`
const AddProductIcon = styled.img`
    background: url('https://api.iconify.design/carbon:tag-edit.svg?color=white') no-repeat center center / contain;
`
const CategoryIcon = styled.img`
    background: url('https://api.iconify.design/bx:bx-category-alt.svg?color=white') no-repeat center center / contain;
`
const AddCategoryIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:appstore-add-outlined.svg?color=white') no-repeat center center / contain;
`
const UserIcon = styled.img`
background: url('https://api.iconify.design/bx:bxs-user.svg?color=white') no-repeat center center / contain;
`

const AdminSideBar = () => {
    return (
        <AdminAside>
            <Link to='/admin/products'>
                <ProductIcon />
                <span>Productos</span>
            </Link>
            <Link to='/admin/categories'>
                <CategoryIcon />
                <span>Categorías</span>
            </Link>
            <Link to='/admin/users'>
                <UserIcon/>
                <span>Usuarios</span>
            </Link>

            <Link to='/admin/product'>
                <AddProductIcon />
                <span>Agregar Productos</span>
            </Link>
            <Link to='/admin/category'>
                <AddCategoryIcon />
                <span>Agregar Categorías</span>
            </Link>
        </AdminAside>
    )
}

export default AdminSideBar
