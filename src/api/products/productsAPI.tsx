import axios from "axios";
import { IAddNewProduct } from "./interfaces";

const client = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
});

export const getAllProducts = async()=>{
    return await client.get('/')
}

export const getSingleProduct = async(id:string) => {
    return await client.get(`/${id}`)
}

export const getAllCategories = async() =>{
    return await client.get(`/categories`)
}

export const getSingleCategory = async(name: string) =>{
    return await client.get(`/category/${name}`)
}

export const addNewProduct = async(data: IAddNewProduct)=>{
    const {title, price, description, image, category} = data
    await client.post('/', {data})
}