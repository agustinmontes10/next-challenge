import { Server } from "http"

export type BaseReducerPropsType = {
    something: any,
    somethingStatus: ServerStatus
}

export enum ServerStatus { idle, error, fetch, fetching }

export type PokemonsReducerPropsType = {
    pokemons: any,
    status: ServerStatus
}

export type PokemonReducerPropsType = {
    pokemon: Pokemon,
    status: ServerStatus
}

export type Pokemon = {
    id: number,
    name: string,
    abilities: Ability[],
    base_experience: number
}

export type PokemonCard = {
    name: string,
    url: string
}

export type Ability = {
    ability: {
        name: string
    }
}
