import React, { useEffect } from "react";
import style from './Header.module.sass'
import axios from "axios";
import { useAppDispatch } from "../../hooks";
import { getAllProductsThunk } from "../../reducers/clothingStoreReducer";

function Header(){
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    },[])
    
    return(
        <>
        <h1 className={style.h1}>hello</h1>        
        </>
    )
}

export default Header