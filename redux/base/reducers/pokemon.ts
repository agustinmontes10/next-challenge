import { PokemonReducerPropsType, ServerStatus } from '../../../models/globalModels.ts'
import * as t from '../types'

const globalState: PokemonReducerPropsType = {
  pokemon: {
    id: 0,
    name: '',
    abilities: [],
    base_experience: 0,
  },
  status: ServerStatus.idle
}

export type PosibleActions =
{ type: 'FETCH_ERROR_POKEMON', } |
{ type: 'FETCH_POKEMON', payload: any } |
{ type: 'FETCHING_POKEMON', payload: any }

const pokemonReducer = (state = globalState, action: PosibleActions): PokemonReducerPropsType => {
 
  switch (action.type) {
    case t.FETCH_ERROR_POKEMON:
      return {
        ...state,
        status: ServerStatus.error,
      }
    case t.FETCH_POKEMON:
      return {
        ...state,
        status: ServerStatus.fetch,
        pokemon: action.payload,
      }
      case t.FETCHING_POKEMON:
      return {
        ...state,
        status: ServerStatus.fetching,
      }
    default:
      return {
        ...state
      }
  }
}

export default pokemonReducer
