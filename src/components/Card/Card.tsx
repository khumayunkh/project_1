import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { IProducts } from "../../api/products/interfaces";
import style from './Card.module.sass'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clothingShopActions } from "../../reducers/products/clothingStoreReducer";

interface Props {
    products : IProducts[] | undefined
}

export const Card: React.FC<Props> = ({products}) => {
    const isAuth = useAppSelector(state => state.auth.userIsAuth)
    const {basket} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()

    return(
        <>
        <div className={style.content}>
                {products?.map((item: IProducts) =>
                    <div key={item.id} className={style.card}>
                        <img src={item.image}/>
                        <h5>{item.title}</h5>
                        <h4>{item.price}$</h4>
                        <p>
                            {item.description.length > 180 ?
                                `${item.description.substring(0, 180)}...` : item.description
                            }
                        </p>
                       {isAuth &&
                       <div onClick={() => dispatch(clothingShopActions.setBasket(item))} className={style.add_btn}> 
                        <IconButton>
                             <AddIcon sx={{fontSize: 'large'}}/>
                        </IconButton>
                        </div>}
                    </div>
                )}
            </div>
        </>
    )
}