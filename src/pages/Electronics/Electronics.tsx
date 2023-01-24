import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Card} from "../../components/Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getSingleCategoryThunk } from "../../reducers/products/clothingStoreReducer";
import style from './Electronics.module.sass'

function Electronics(){
    let {name} = useParams() 
    const {singleCategory} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getSingleCategoryThunk(name))
    }, [])
    
    return(
        <>
        <div className={style.container}>
            <div className={style.title}>
                <h1>Electronics</h1>
            </div>
            <Card products={singleCategory}/>
        </div>
        </>
    )
}

export default Electronics