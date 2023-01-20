import React, { useEffect } from "react";
import style from './Header.module.sass'
import axios from "axios";
import { useAppDispatch } from "../../hooks";
import { getAllProductsThunk, getSingleProductThunk } from "../../reducers/clothingStoreReducer";

function Header(){
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getSingleProductThunk('1'))
    },[])
    
    return(
        <>
        <h1 className={style.h1}>hello</h1>        
        </>
    )
}

export default Header