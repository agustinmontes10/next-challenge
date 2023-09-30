import * as t from '../types'

export const getPokemon = (url: string) => (dispatch: any) => {
   
    dispatch({ type: t.FETCHING_POKEMON })

    fetch(url)
      .then((response) => response.json())

      .then((data) => {

        console.log(data)

        setTimeout(() => {
          dispatch({
            type: t.FETCH_POKEMON,
            payload: data,
          });
        }, 1000)
        
        

      })
      .catch((error) => {

        dispatch({
          type: t.FETCH_ERROR_POKEMON,
          payload: error,
        });
        
       console.log(error)

      });
};