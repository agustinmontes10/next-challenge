import { combineReducers } from 'redux'
import baseReducer from './base/reducers'

const rootReducer = combineReducers({
  base: baseReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
