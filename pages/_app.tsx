import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import { store } from '../slices/index'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

const Container = styled.div`
  min-height: 101vh;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    </>
  )
}

export default MyApp
