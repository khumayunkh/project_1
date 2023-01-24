import { Visibility, VisibilityOff } from "@mui/icons-material"
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { ILogin } from "../../api/auth/interfaces"
import { useAppDispatch } from "../../hooks"
import { loginThunk } from "../../reducers/auth/authReducer"
import style from './Login.module.sass'


function Login(){
    const dispatch = useAppDispatch()
    const {register, handleSubmit} = useForm<ILogin>()
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const username = register('username', {required: true})
    const password = register('password', {required: true})
    
    const onSubmit = (data: ILogin)  => {
        dispatch(loginThunk({
            username: data.username,
            password: data.password
        }))
    }
    
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)} 
                    className={style.form}>
                    <TextField 
                        {...username}
                        id="standard-basic" 
                        label="Standard" 
                        variant="standard"
                    />
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                {...password}
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                    </FormControl>
                    <button className={style.btn}>Login</button>
                    <NavLink className={style.navigate_btn} to='/signup'>SignUp</NavLink>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login