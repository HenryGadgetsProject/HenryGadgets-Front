import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userLogut } from '../../../Redux/Actions/User/UserActions'

import styled from 'styled-components'

const Ul = styled.ul`
    display             : flex;
    flex-flow           : row nowrap;
    list-style          : none;
    margin              : auto 2em;

    li {
        ${'' /* font-size       : 1.4em; */}
        ${'' /* color           : var(--font-color); */}
        padding         : 1.25em 0;
    }

    @media (max-width: 768px) {
        background-color: #0D2538;
        flex-flow       : column nowrap;
        ${'' /* height: 100vh; */}
        height          : 100%;
        padding-top     : 5em;
        position        : fixed;
        right           : -2em;
        top             : 0;
        transform       : ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition      : all .5s linear;
        width           : 300px;
        z-index: 900;

        li {
            color       : var(--pure-white);
            font-size   : 1.18em;
            margin      : 0 2em .5em 4em;
        }
    }
`

const Img = styled.img`
    height              : 2em;
    transition          : 0.5s;
    width               : 2em;
    &:hover {
        transform       : scale(1.30)
    }
`
const loginIcon = 'https://api.iconify.design/ri:login-box-line.svg?color=white'
const logoutIcon = 'https://api.iconify.design/ri:logout-box-line.svg?color=white'
// const userIcon = 'https://api.iconify.design/carbon:user-avatar-filled.svg?color=white'
const registerUserIcon = 'https://api.iconify.design/ant-design:user-add-outlined.svg?color=white'
const adminIcon = 'https://api.iconify.design/clarity:administrator-solid.svg?color=white'
const chartIcon = 'https://api.iconify.design/si-glyph:trolley-2.svg?color=white'

const MenuOptBar = ({ open }) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)

    const handleClick = () => {
        dispatch(userLogut())
    }

    return (
        <Ul open={open}>
            {user.token ?
                user.is_admin ?
                <>
                    <li>
                        {/* <Link to="/user" className="link">
                            <Img src={userIcon} alt='user'></Img>
                        </Link> */}
                        <span>{user.first_name}</span>
                    </li>
                    <li>
                        <Link to="/home" className="link" onClick={handleClick}>
                            <Img src={logoutIcon} alt='logout'></Img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" className="link">
                            <Img src={adminIcon} alt='admin'></Img>
                        </Link>
                    </li>
                </>
                :
                <>
                    <li>
                        {/* <Link to="/user" className="link">
                            <Img src={userIcon} alt='user'></Img>
                        </Link> */}
                        <span>{user.first_name}</span>
                    </li>
                    <li>
                        <Link to="/home" className="link" onClick={handleClick}>
                            <Img src={logoutIcon} alt='logout'></Img>
                        </Link>
                    </li>
                </>
            :
            <>
                <li>
                    <Link to="/login" className="link">
                        <Img src={loginIcon} alt='login'></Img>
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="link">
                        <Img src={registerUserIcon} alt='register'></Img>
                    </Link>
                </li>
            </>
            }


            {/* <li>
                <Link to = "/about"  className = "link">
                    Acerca de
                </Link>
            </li> */}
            {/* <li>Contact Us</li>
            <li>Sign In</li>
            <li>Sign Up</li> */}
            <li>
                <Link to="/cart" className="link">
                    <Img src={chartIcon} alt='chart'></Img>
                </Link>
            </li>
        </Ul>
    )
}

export default MenuOptBar
