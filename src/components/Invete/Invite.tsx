import { CheckBox } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import style from './Invite.module.sass'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Invite(){
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>Invite User</h1>
                <div className={style.details}>
                    <div className={style.form}>
                        <label>Email</label>
                        <input className={style.input}/>
                    </div>
                    <div className={style.form}>
                        <label>UserName</label>
                        <input className={style.input}/>
                    </div>
                    <div className={style.form}>
                        <label>First Name</label>
                        <input className={style.input}/>
                    </div>
                    <div className={style.form}>
                        <label>Last Name</label>
                        <input  className={style.input}/>
                    </div>
                    <div className={style.radio}>
                        <FormGroup>
                            <FormControlLabel sx={{display: 'flex', alignItems: 'center'}} control={<Checkbox/>} label="Label" />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel sx={{display: 'flex', alignItems: 'center'}} control={<Checkbox/>} label="Label" />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel sx={{display: 'flex', alignItems: 'center'}} control={<Checkbox/>} label="Label" />
                        </FormGroup>
                    </div>
                </div>
                <button className={style.btn}>Invite User</button>
            </div>
        </div>
        </>
    )
}

export default Invite