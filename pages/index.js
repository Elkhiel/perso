import NextLink from 'next/link'
import { Container, Box, Heading, useColorModeValue, Image, Link, Button , List ,Icon, ListItem , SimpleGrid} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioDate, BioSection } from '../components/bio'
import { ChevronRightIcon, DownloadIcon,ExternalLinkIcon } from '@chakra-ui/icons'
import { GridItem } from '../components/grid-item'
import {IoLogoGithub,IoLogoDiscord} from 'react-icons/io5'
import Layout from '../components/layouts/article'

const Page = ( ) => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" fontStyle='italic' background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={8} align="center">
                    👋 Hello, I'm a Cybersecurity student based in Brittany - France !
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Matthieu Carbonnier
                        </Heading>
                        <p>Intern at Atos - Big Data and Security</p>
                        <p><small>( 3D-2D Artist / Security Enthusiast / Network Technician )</small></p>
                        <br/>

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
                        src="/images/matthieu.png"/>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                    🔍 Who am i ?
                    </Heading>
                    <Paragraph>I am a french student in my first year of engineering school at {''}
                        <Link href='https://esna.bzh' isExternal>
                            ESNA <ExternalLinkIcon/>
                        </Link>
                        <br/>Currently, my goal is to become a cyber defense engineer.
                        <br/>In my free time I enjoy learning new technical skills, as well as programming applications in JS / PHP / React / MySQL ...
                        <br/>My last project was the development of a minecraft mod called {''}
                        <Link href='/works/advanced-tools-mastery'>
                            Advanced Tools Mastery
                        </Link>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme={useColorModeValue('purple', 'orange')}>
                                My Works
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                    📚 Bio
                    </Heading>
                    <BioSection>
                        <BioDate>2002</BioDate>
                        Born in Saint-Malo - <i>France</i>.
                    </BioSection>
                    <BioSection>
                        <BioDate>2017</BioDate>
                        Hight school student at «Lycée Sévigné» , majoring in economics and social studies - <i>France</i>
                    </BioSection>
                    <BioSection>
                        <BioDate>2020</BioDate>
                        University student at the HND of Saint-Malo in networks and telecommunications - <i>France</i>
                    </BioSection>
                    <BioSection>
                        <BioDate>Now</BioDate>
                        Engineering student at ESNA in Cybersecurity And Intern at Atos - <i>France</i>
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Box align="center" my={4}>
                        <NextLink href="/pdf/CV_Matthieu_Carbonnier.pdf">
                            
                            <Button rightIcon={<DownloadIcon/>} colorScheme={useColorModeValue('purple', 'orange')}>
                                My CV
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Contact Info
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href='https://github.com/elkhiel' style={{textDecoration: "none"}} target="_blank" hover={{textDecoration: "none"}}>
                                <Button variant="ghost" colorScheme="teal"  leftIcon={<Icon as={IoLogoGithub}></Icon>}>Elkhiel</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                        <Link href='https://discord.com/login' style={{textDecoration: "none"}} target="_blank" hover={{textDecoration: "none"}}>
                            <Button variant="ghost" colorScheme="teal"  leftIcon={<Icon as={IoLogoDiscord}></Icon>}>Matthieu#4728</Button>
                        </Link>

                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
        
    )
}

export default Page