import '@/styles/globals.scss'
import '@/styles/pokemons.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { wrapper } from '../redux/store'

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)

  React.useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
