import { client } from "..";
import { INewUserAddress } from "../auth/interfaces";
import { IAddNewProduct } from "./interfaces";

export const getAllProducts = async()=>{
    return await client.get('/products')
}

export const getSingleProduct = async(id:string) => {
    return await client.get(`/products/${id}`)
}

export const getAllCategories = async() =>{
    return await client.get(`/products/categories`)
}

export const getSingleCategory = async(name: string) =>{
    return await client.get(`/products/category/${name}`)
}

export const addNewProduct = async(data: INewUserAddress)=>{
    await client.post('/products', {data})
}