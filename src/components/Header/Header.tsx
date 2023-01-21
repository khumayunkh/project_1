import React, { useEffect } from "react";
import style from './Header.module.sass'
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useAppSelector } from "../../hooks";

function Header(){
    const {userIsAuth} = useAppSelector(state => state.auth)
    return(
        <>
        <div className={style.container}>
            <div className={style.contant}>
                <div className={style.menu}>
                    <NavLink className={style.btn} to='/'>Home</NavLink>
                    <NavLink className={style.btn} to='/'>Men's</NavLink>
                    <NavLink className={style.btn} to='/'>Women's</NavLink>
                    <NavLink className={style.btn} to='/'>jewelery</NavLink>
                    <NavLink className={style.btn} to='/'>electronics</NavLink>
                </div>
                <div className={style.login}>
                {!userIsAuth ? 
                    <>
                        <NavLink className={style.btn} to='/'>Login</NavLink>
                        <NavLink className={style.btn} to='/'>Sign Up</NavLink>
                    </>
                    :          
                    <>
                        <NavLink className={style.btn} to='/'>Profile</NavLink>          
                        <IconButton
                          sx={{ mr: 2 }}
                        >
                            <ShoppingBasketIcon sx={{fontSize: 'large'}}/>
                        </IconButton>
                    </>
                }
                </div>
            </div>    
        </div>       
        </>
    )
}

export default Header