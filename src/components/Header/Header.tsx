import React, { useEffect } from "react";
import style from './Header.module.sass'
import { useAppDispatch } from "../../hooks";

function Header(){
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(updateUserThunk('3'))
    // },[])
    
    return(
        <>
        <h1 className={style.h1}>hello</h1>        
        </>
    )
}

export default Header