import * as t from '../types'

export const getPokemon = (id: string) => (dispatch: any) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    dispatch({ type: t.FETCHING_POKEMON })

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })

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
          payload: error.message,
        });
        
       console.log(error)

      });
};