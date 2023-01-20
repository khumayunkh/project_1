import React, { useEffect } from "react";
import style from './Header.module.sass'
import { useAppDispatch } from "../../hooks";
import { loginThunk } from "../../reducers/auth/authReducer";

function Header(){
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(loginThunk({
    //         username: "mor_2314",
    //         password: "83r5^_"
    //     }))
    // },[])
    
    return(
        <>
        <h1 className={style.h1}>hello</h1>        
        </>
    )
}

export default Header