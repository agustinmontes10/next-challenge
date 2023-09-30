import * as t from '../types'

export const getPokemons = () => (dispatch: any) => {
   
    dispatch({ type: t.FETCHING_POKEMONS })
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((data) => {

        console.log(data.results)

        setTimeout(() => {
          
          dispatch({
            type: t.FETCH_POKEMONS,
            payload: data.results,
          });

        }, 1000)
        

      })
      .catch((error) => {

        dispatch({
          type: t.FETCH_ERROR_POKEMONS,
          payload: error,
        });

      });
};