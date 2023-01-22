import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { getSingleCategoryThunk } from "../../reducers/products/clothingStoreReducer";
import style from './Electronics.module.sass'

function Electronics(){
    let {name} = useParams() 
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getSingleCategoryThunk(name))
    }, [])
    
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
             <h3>ew</h3> 
            </div>
        </div>
        </>
    )
}

export default Electronics