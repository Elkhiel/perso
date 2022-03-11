import { Container, Box, Heading,useColorModeValue, } from "@chakra-ui/react"
const Page = ( ) => {
    return (
        <Container>
            <Box borderRadius="lg" background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I'm a network and telecommunication student based in Saint-Malo !
            </Box>
            
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Matthieu Carbonnier
                    </Heading>
                    <p>Digital Artisan ( 3D Artist / Developer / Network Technician )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page