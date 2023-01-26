import React from "react";
import style from './Header.module.sass'
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authActions } from "../../reducers/auth/authReducer";

function Header(){
    const IsAuth = useAppSelector(state => state.auth.userIsAuth)
    const {basket} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()
    
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.menu}>
                    <NavLink className={style.btn} to='/'>Home</NavLink>
                    <NavLink className={style.btn} to='/allProducts'>All Products</NavLink>
                </div>
                <div className={style.login}>
                {!IsAuth ? 
                    <>
                        <NavLink className={style.btn} to='/login'>Login</NavLink>
                        <NavLink className={style.btn} to='/signUp'>Sign Up</NavLink>
                    </>
                    :          
                    <>
                        <NavLink className={style.btn} to='/'>Profile</NavLink> 
                        <NavLink
                            onClick={() => dispatch(authActions.setLogOut())} 
                            className={style.btn}
                            to='/'>
                                LogOut
                        </NavLink>
                        <div className={style.basket}>
                            {basket?.length}
                        </div>
                        <NavLink to='/basket'>          
                            <IconButton
                              sx={{ mr: 2 }}
                            >
                                <ShoppingBasketIcon sx={{fontSize: 'large'}}/>
                            </IconButton>
                        </NavLink>
                    </>
                }
                </div>
            </div>    
        </div>       
        </>
    )
}

export default Header