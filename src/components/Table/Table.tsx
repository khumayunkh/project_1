import React from "react";
import style from './Table.module.sass'


function Table(){
    return(
        <div className={style.container}>
        <table className={style.table}> 
            <thead>
                <tr className={style.navbar}>
                    <th>UserName</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Roles</th>
                    <th>Last_Login</th>
                    <th>Date_joined</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label='UserName'>khumayunkh</td>
                    <td data-label='FirstName'>Humoyun</td>
                    <td data-label='LastName'>Hasanov</td>
                    <td data-label='Email'>khumayunkh@email.com</td>
                    <td data-label='Roles'>
                        <div className={style.roles}>
                        <div className={style.content}>
                            <p>Admin</p>
                            <p>Admin</p>
                            <p>Admin</p>
                        </div>
                        <button className={style.btn}>+add</button>
                        </div>
                    </td>
                    <td data-label='Last_Login'>2h ago</td>
                    <td data-label='Date_joined'>12june 2023</td>
                    <td data-label='Status'>
                        <img src="https://cdn-icons-png.flaticon.com/512/4225/4225683.png"/>
                    </td>
                </tr>

                <tr>
                    <td data-label='UserName'>khumayunkh</td>
                    <td data-label='FirstName'>Humoyun</td>
                    <td data-label='LastName'>Hasanov</td>
                    <td data-label='Email'>khumayunkh@email.com</td>
                    <td data-label='Roles'>
                        <div className={style.roles}>
                        <div className={style.content}>
                            <p>Admin</p>
                            <p>Admin</p>
                            <p>Admin</p>
                        </div>
                        <button className={style.btn}>+add</button>
                        </div>
                    </td>
                    <td data-label='Last_Login'>2h ago</td>
                    <td data-label='Date_joined'>12june 2023</td>
                    <td data-label='Status'>
                        <img src="https://cdn-icons-png.flaticon.com/512/4225/4225690.png"/>
                    </td>
                </tr>

                <tr>
                    <td data-label='UserName'>khumayunkh</td>
                    <td data-label='FirstName'>Humoyun</td>
                    <td data-label='LastName'>Hasanov</td>
                    <td data-label='Email'>khumayunkh@email.com</td>
                    <td data-label='Roles'>
                        <div className={style.roles}>
                        <div className={style.content}>
                            <p>Admin</p>
                            <p>Admin</p>
                            <p>Admin</p>
                        </div>
                        <button className={style.btn}>+add</button>
                        </div>
                    </td>
                    <td data-label='Last_Login'>2h ago</td>
                    <td data-label='Date_joined'>12june 2023</td>
                    <td data-label='Status'>
                        <img src="https://cdn-icons-png.flaticon.com/512/4225/4225683.png"/>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Table