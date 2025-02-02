import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './/pages/App'
import { ProductsProvider } from './context/ProductsContext'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ChakraProvider>
  </React.StrictMode>,
)