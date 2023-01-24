import React from "react";
import { IProducts } from "../../api/products/interfaces";
import style from './Card.module.sass'

interface Props {
    products : IProducts[] | undefined
}

export const Card: React.FC<Props> = ({products}) => {
    return(
        <>
        <div className={style.content}>
                {products?.map((item: any) =>
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
        </>
    )
}
