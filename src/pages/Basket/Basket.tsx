import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import style from './Basket.module.sass'


function Basket(){
    const {basket} = useAppSelector(state => state.products)

    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                {basket.map(item => (
                    <>
                    <div className={style.card}>
                        
                    </div>
                    </>
                ))}
            </div>
        </div>
        </>
    )
}

export default Basket