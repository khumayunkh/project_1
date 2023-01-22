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
            <div className={style.title}>
                <h1>Electronics</h1>
            </div>
            <div className={style.content}>
                {singleCategory?.map((item: any) =>
                    <div className={style.card}>
                        <img src={item.image}/>
                        <h5>{item.title}</h5>
                        <h4>{item.price}$</h4>
                        <p>
                            {item.description.length > 250 ?
                                `${item.description.substring(0, 180)}...` : item.description
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Electronics