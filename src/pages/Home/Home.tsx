import React, { useEffect } from "react";
import { getAllCategoriesThunk } from "../../reducers/products/clothingStoreReducer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import style from './Home.module.sass'
import { NavLink } from "react-router-dom";

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
                    {categories?.map((item: any, index) => 
                    <>
                    <NavLink className={style.card} to={`/${item}`}>
                        <h4>{item}</h4>
                    </NavLink>
                    </>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Home