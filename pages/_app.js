import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import { Global } from '@emotion/react'
import tokens from '../styles/tokens'
import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "../components/fonts"
import Layout from '../components/layouts/main'
import theme from '../libs/theme'

const Website = ({ Component, pageProps, router}) => {
    return (
        <ThemeProvider theme={tokens}>
      <Global
        styles={(theme) => ({
          a: {
            ':hover': {
            },
            ':focus': {
                boxShadow: 'none !important',
              },
          }
          // Add additional styles here
        })}
      />
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
        </ThemeProvider>
    )
}

export default Website