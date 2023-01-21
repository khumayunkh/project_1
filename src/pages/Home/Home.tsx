import React, { useEffect } from "react";
import { getAllCategoriesThunk } from "../../reducers/products/clothingStoreReducer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import style from './Home.module.sass'

function Home(){
    const {categories} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    },[])

    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title}>
                    <h1>Goods for every taste</h1>
                </div>
                <div className={style.menu}>
                    {categories?.map((item: any) => 
                    <>
                    <div className={style.card}>
                        <h4>{item}</h4>
                    </div>
                    </>)}
                </div>
            </div> 
        </div>
        </>
    )
}

export default Home