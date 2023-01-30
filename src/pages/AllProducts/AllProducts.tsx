import React, { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllProductsThunk } from "../../reducers/products/clothingStoreReducer";
import style from './AllProducts.module.sass'


function AllProducts(){
    const {products} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getAllProductsThunk())
    },[products?.length])

    return(
        <>
         <div className={style.container}>
            <div className={style.title}>
                <h1>All Products</h1>
            </div>
            <Card products={products}/>
        </div>
        </>
    )
}

export default AllProducts