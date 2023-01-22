import { client } from "..";
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

export const getSingleCategory = async(name: string | undefined) =>{
    return await client.get(`/products/category/${name}`)
}

export const addNewProduct = async(data: IAddNewProduct)=>{
    await client.post('/products', {data})
}