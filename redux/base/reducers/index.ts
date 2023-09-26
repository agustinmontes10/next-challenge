import { BaseReducerPropsType, ServerStatus } from '../../../models/globalModels.ts'
import * as t from '../types'

const globalState: BaseReducerPropsType = {
  something: {},
  somethingStatus: ServerStatus.idle,
}

export type PosibleActions =
{ type: 'FETCH_ERROR_SOMETHING', } |  // => Change those
{ type: 'FETCH_SOMETHING', payload: any } | // => Change those
{ type: 'FETCHING_SOMETHING', payload: any }  // => Change those

const reducer = (state = globalState, action: PosibleActions): BaseReducerPropsType => {
  /* Develop Log */ // console.log("[BASE Reducer] Action => ", action);
  switch (action.type) {
    case t.FETCH_ERROR_SOMETHING:
      return {
        ...state,
        somethingStatus: ServerStatus.error,
      }
    case t.FETCH_SOMETHING:
      return {
        ...state,
        somethingStatus: ServerStatus.fetch,
        something: action.payload,
      }
      case t.FETCHING_SOMETHING:
      return {
        ...state,
        somethingStatus: ServerStatus.fetching,
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
