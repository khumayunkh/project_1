import React, { useEffect } from "react";
import style from './Header.module.sass'
import { useAppDispatch } from "../../hooks";
import { loginThunk, updateUserThunk } from "../../reducers/auth/authReducer";

function Header(){
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(updateUserThunk({
    //         id:1,
    //         email:'khumayun@gmail.com',
    //         username:'humo',
    //         password:'m38rmF$',
    //         name:{
    //             firstname:'John',
    //             lastname:'Doe'
    //         },
    //         address:{
    //             city:'kilcoole',
    //             street:'7835 new road',
    //             number:3,
    //             zipcode:'12926-3874',
    //             geolocation:{
    //                 lat:'-37.3159',
    //                 long:'81.1496'
    //             }
    //         },
    //         phone:'1-570-236-7033'
    //     }))
    // },[])
    
    return(
        <>
        <h1 className={style.h1}>hello</h1>        
        </>
    )
}

export default Header