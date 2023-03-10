export interface INewUserName{
    firstname: string
    lastname: string
}

export interface INewUserGeolocation{
    lat: string
    long: string
}

export interface INewUserAddress{
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: INewUserGeolocation
}

export interface IUser{
    id? : number
    email: string
    username: string
    password: string
    name: INewUserName
    address: INewUserAddress
    phone: string
}

export interface ILogin{
    username: string,
    password: string
}

export interface IUserState {
    userIsAuth: boolean
    userIsLoading: boolean
    userErrorMessage?: string
    users?: IUser[]
    user?: IUser,
    me?: number
}
