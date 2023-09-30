import { combineReducers } from 'redux'
import baseReducer from './base/reducers'
import pokemonsReducer from './base/reducers/pokemons'
import pokemonReducer from './base/reducers/pokemon'

const rootReducer = combineReducers({
  base: baseReducer,
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
