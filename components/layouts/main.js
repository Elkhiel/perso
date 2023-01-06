import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children,router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Matthieu C - Homepage</title>
                <link rel="icon" type="image/x-icon" href="/images/logo_rez0.ico"></link>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW={"container.xl"} pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main