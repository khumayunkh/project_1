import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import style from './Basket.module.sass'
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function Basket(){
    const {basket} = useAppSelector(state => state.products)

    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                {basket.map(item => (
                    <>
                    <div className={style.card}>
                        <img src={item.image}/>
                        <div className={style.description}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                        <div className={style.delete_btn}>
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