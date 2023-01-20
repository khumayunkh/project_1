export interface Rating {
    rate: number;
    count: number;
}

export interface IProducts {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface IAddNewProduct {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface ICategories {
    categories: Array<string>
}

export interface IProductsState {
    productsIsLoading: boolean
    productsErrorMessage?: string
    products?: IProducts
    singleProduct?: IProducts
    categories?: ICategories
    singleCategory? :IProducts
}