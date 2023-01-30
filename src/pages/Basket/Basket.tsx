import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import style from './Basket.module.sass'
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { clothingShopActions } from "../../reducers/products/clothingStoreReducer";

function Basket(){
    const {basket} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()

    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                {basket.map(item => (
                    <>
                    <div key={item.id} className={style.card}>
                        <img src={item.image}/>
                        <div className={style.description}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <h5>{item.price}</h5>
                        </div>
                        <div className={style.delete_btn} onClick={() => dispatch(clothingShopActions.deleteProductFromBasket(item.id))}>
                            <IconButton
                              sx={{ mr: 2 }}
                            >
                                <DeleteIcon sx={{fontSize: 'large'}}/>
                            </IconButton>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        </div>
        </>
    )
}

export default Basket