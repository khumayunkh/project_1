import { client } from '..'
import { IUser } from './interfaces'

export const getAllUsers = async() => {
    return await client.get('/users') 
}

export const getSingleUser = async(id: string) =>{
    return await client.get(`/users/${id}`) 
}

export const addNewUser = async(data: IUser) => {
    return await client.post('/users',{data})
}


export const updateUser = async(data: IUser) => {
    await client.patch(`/users/${data.id}`, {
        email: data.email,
        username: data.username,
        password: data.password,
        name:{
            firstname: data.name.firstname,
            lastname: data.name.lastname
        },
        address:{
            city: data.address.city,
            street: data.address.street,
            number: data.address.number,
            zipcode: data.address.zipcode,
            geolocation:{
                lat: data.address.geolocation.lat,
                long: data.address.geolocation.long
            }
        },
        phone: data.phone
    })
}

export const deleteUser = async(data: IUser) => {
    return await client.delete(`/users/${data.id}`)
}

export const login = async(data: IUser) => {
    return await client.post('/users',{
        username: data.username,
        password: data.password
    })
}