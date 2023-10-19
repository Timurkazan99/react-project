export interface User {
    //добавить поля
}

export interface History {
    type: string
    search: string
    timeStamp: number
}

export interface Country {
    cca3: string
    name: string
    capital: string
    population: string
    flags: string
}

export interface CountryState {
    countries: Country[]
    country: Country | null
    isLoading: boolean
    error: string
}

export interface HistoryState {
    history: History[]
}

export interface UserState {
    login: string
    password: string
}