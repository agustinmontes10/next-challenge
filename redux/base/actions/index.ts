import * as t from '../types'

export const testCall = () => (dispatch: any) => {
  dispatch({ type: t.FETCHING_SOMETHING })
  setTimeout(() => {
    dispatch({ type: t.FETCH_SOMETHING, payload: "Hello World" })
  }, 1000)
}

