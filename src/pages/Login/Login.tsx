import React from "react"
import { useForm } from "react-hook-form"
import { Navigate, NavLink } from "react-router-dom"
import { ILogin } from "../../api/auth/interfaces"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { loginThunk } from "../../reducers/auth/authReducer"
import style from './Login.module.sass'


function Login(){
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.userIsAuth)
    const {register, handleSubmit} = useForm<ILogin>()

    const username = register('username', {required: true})
    const password = register('password', {required: true})

    const onSubmit = (data: ILogin)  => {
        dispatch(loginThunk({
            username: data.username,
            password: data.password
        }))
    }

    if(isAuth){
      return <Navigate to='/'/>
    }

    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)} 
                    className={style.form}>
                    <input {...username} placeholder='Email'/>
                    <input {...password} placeholder='Password' type='password'/>
                    <button className={style.btn}>Login</button>
                    <NavLink className={style.navigate_btn} to='/signup'>SignUp</NavLink>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login