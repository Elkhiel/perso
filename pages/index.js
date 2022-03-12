import NextLink from 'next/link'
import { Container, Box, Heading, useColorModeValue, Image, Link, Button } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioDate, BioSection } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Page = ( ) => {
    return (
        <Container>
            <Box borderRadius="lg" fontStyle='italic' background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={8} align="center">
                Hello, I'm a networks and telecommunications student based in Saint-Malo !
            </Box>
            
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Matthieu Carbonnier
                    </Heading>
                    <p>Digital Artisan</p>
                    <p>( 3D Artist / Developer / Network Technician )</p>

                </Box>
                <Box flexShrink={0}
                mt={{base:4,md:0}}
                ml={{md:6}}
                align='center'
                >               
                    <Image borderColor="whiteALpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth='100px'
                    display="inline-block"
                    borderRadius="full"
                    src="/images/matthieu.jpg"/>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                Whoami ?
                </Heading>
                <Paragraph>I am a french student in my second year in networks and telecommunications at Saint-Malo.
                    <br/>In my free time I enjoy learning new technical skills, as well as programming applications in JS / PHP / React / MySQL ...
                    <br/>At the moment, two colleagues and I are working on a new project called {''}
                    <Link href='https://rez0.fr' isExternal>
                        Rez'0 <ExternalLinkIcon/>
                    </Link>
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme={useColorModeValue('purple', 'orange')}>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioDate>2002</BioDate>
                    Born in Saint-Malo - <i>France</i>.
                </BioSection>
                <BioSection>
                    <BioDate>2013</BioDate>
                    Middle school student at «Collège Bourgchevreuil» - <i>France</i>
                </BioSection>
                <BioSection>
                    <BioDate>2017</BioDate>
                    Hight school student at «Lycée Sévigné» , majoring in economics and social studies - <i>France</i>
                </BioSection>
                <BioSection>
                    <BioDate>2020</BioDate>
                    University student at the HND of Saint-Malo in networks and telecommunications - <i>France</i>
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Box align="center" my={4}>
                    <NextLink href="/pdf/CV_Matthieu_Carbonnier.pdf">
                        
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme={useColorModeValue('purple', 'orange')}>
                            My CV
                        </Button>
                    </NextLink>
                </Box>

            </Section>
        </Container>
        
    )
}

export default Page