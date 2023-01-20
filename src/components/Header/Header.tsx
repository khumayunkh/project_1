import React, { useEffect } from "react";
import style from './Header.module.sass'
import { useAppDispatch } from "../../hooks";

function Header(){
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(addNewProductThunk({
    //         title: 'test product',
    //         price: 13.5,
    //         description: 'lorem ipsum set',
    //         image: 'https://i.pravatar.cc',
    //         category: 'electronic'
    //     }))
    // },[])
    
    return(
        <>
        <h1 className={style.h1}>hello</h1>        
        </>
    )
}

export default Header