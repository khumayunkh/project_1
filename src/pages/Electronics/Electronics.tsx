import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
            <div className={style.content}>
                {singleCategory?.map((item: any) =>
                    <>
                    <h4>{item.title}</h4>
                    </>
                )}
            </div>
        </div>
        </>
    )
}

export default Electronics