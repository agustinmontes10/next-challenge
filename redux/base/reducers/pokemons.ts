import { PokemonsReducerPropsType, ServerStatus } from '../../../models/globalModels.ts'
import * as t from '../types'

const globalState: PokemonsReducerPropsType = {
  pokemons: [],
  status: ServerStatus.idle,
}

export type PosibleActions =
{ type: 'FETCH_ERROR_POKEMONS', } |
{ type: 'FETCH_POKEMONS', payload: any } |
{ type: 'FETCHING_POKEMONS', payload: any }

const pokemonsReducer = (state = globalState, action: PosibleActions): PokemonsReducerPropsType => {
  
  switch (action.type) {
    case t.FETCH_ERROR_POKEMONS:
      return {
        ...state,
        status: ServerStatus.error,
      }
    case t.FETCH_POKEMONS:
      return {
        ...state,
        status: ServerStatus.fetch,
        pokemons: action.payload,
      }
      case t.FETCHING_POKEMONS:
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

export default pokemonsReducer
