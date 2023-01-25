import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { IUser } from "../../api/auth/interfaces"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addNewUserThunk } from "../../reducers/auth/authReducer";
import { ICreateUser } from "./interfaces";
import style from './SignUp.module.sass'


function SignUp(){
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.userIsAuth)
    const {register, handleSubmit} = useForm<ICreateUser>()

    const username = register('username', {required: true})
    const email = register('email', {required: true})
    const password = register('password', {required: true})
    const firstname = register('firstname')
    const lastname = register('lastname')
    const city = register('city')
    const street = register('street')
    
    const onSubmit = (data: ICreateUser)  => {
        dispatch(addNewUserThunk({
            email: data.email,
            username: data.username,
            password: data.password,
            name:{
                firstname: data.email,
                lastname: data.lastname
            },
            address:{
                city: data.city,
                street: data.street,
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone:'1-570-236-7033'
        }))
    }

    if(isAuth){
      return <Navigate to='/'/>
    }

    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <h1>SignUp</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)} 
                    className={style.form}>
                    <input {...username} placeholder='UserName'/>
                    <input {...email} placeholder='Email'/>
                    <input {...password} placeholder='Password' type='password'/>
                    <input {...firstname} placeholder='Firstname'/>
                    <input {...lastname} placeholder='Lastname'/>
                    <input {...city} placeholder='City'/>
                    <input {...street} placeholder='Street'/>
                    <button className={style.btn}>SignUp</button>
                    <NavLink className={style.navigate_btn} to='/login'>Login</NavLink>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignUp