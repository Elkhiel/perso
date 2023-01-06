import { Container, Badge, Text, Link, List, ListItem, Divider, OrderedList} from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from "../../components/paragraph"
import { Title,WorkImage, WorkImage2, Meta, WorkDownloadLink} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = ( ) => {
    return (
        <Layout title="Logo Promo ESNA">
            <Container>
                <Title>
                    Logo Promo ESNA <Badge>2022</Badge>
                </Title>
                <P>
                Every year, at ESNA, a logo representing the new class of students (of which I belong) is created. In 2022 it was up to me to design it.
                <br/>I'm going to share with you the process of creation of this logo
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Author</Meta>
                        <span>Matthieu C</span>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <Meta>Topic</Meta>
                        <span>A Logo for the 2022 new promo at ESNA</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Adoble Illustrator</span>
                    </ListItem>
                </List>
                <Paragraph>
                    At ESNA, all the promotions have a logo representing a kind of animal (hydra, fox), this year will not derogate from the rule.
                    At first we had to decide what kind of animal we would choose.
                    <br/>Finally we had 7 possible choices of animals/Monsters that we had to choose from :<br/><br/>
                    <OrderedList>
                        <ListItem ml={4}>Minotaur</ListItem>
                        <ListItem ml={4}>Trojan hors</ListItem>
                        <ListItem ml={4}>Malinois</ListItem>
                        <ListItem ml={4}>Cerberus</ListItem>
                        <ListItem ml={4}>Griffon</ListItem>
                        <ListItem ml={4}>God</ListItem>
                        <ListItem ml={4}>Raven</ListItem>
                    </OrderedList>
                    <br/>Following a vote in several rounds, the raven was chosen. Then began a long process of logo creation.
                    I say long because in reality it was important that the logo pleases the majority of the students (~40 people!).
                    <br/>With the following images, you're going to discover the different stages of creation of the logo.
                </Paragraph>
                <Divider mb={3} mt={3}/>
                <Text mb={3}>1️⃣ In this first version i tried to replicate a shield with the raven wings... It's not working very well : </Text>
                <WorkImage2 src="/images/works/logo-promo-esna_01.png" alt="logo promo esna 2022"/>
                <Divider mb={3} mt={3}/>
                <Text mb={3}>2️⃣ In this second version we can see the round pattern with the name of the school (required). The raven is also much bigger : </Text>
                <WorkImage2 src="/images/works/logo-promo-esna_02.png" alt="logo promo esna 2022"/>
                <Divider mb={3} mt={3}/>
                <Text mb={3}>3️⃣ In this version I implemented a lock that was broken, to symbolize the red team : </Text>
                <WorkImage2 src="/images/works/logo-promo-esna_03.png" alt="logo promo esna 2022"/>
                <Divider mb={3} mt={3}/>
                <Text mb={3}>4️⃣ Little by little we can see that the raven is getting more precise : </Text>
                <WorkImage2 src="/images/works/logo-promo-esna_04.png" alt="logo promo esna 2022"/>
                <Divider mb={3} mt={3}/>
                <Text mb={3}>5️⃣ This version is the closest one to the final version, but there is still room for improvement : </Text>
                <WorkImage2 src="/images/works/logo-promo-esna_05.png" alt="logo promo esna 2022"/>
                <Divider mb={3} mt={3}/>
                <Text mb={3}>6️⃣ This version on the other hand is way different from everything that had been done in the past, it is much more "stylized" : </Text>
                <WorkImage2 src="/images/works/logo-promo-esna_06.png" alt="logo promo esna 2022"/>
                <Divider mb={3} mt={3}/>
                <Text mb={3}>7️⃣ But in the end, this version was chosen by the students. I'm proud of the work done, it was quit a long process, both timewise and mentally.  : </Text>
                <WorkImage2 src="/images/works/logo-promo-esna_07.png" alt="logo promo esna 2022"/>
                <Text mt={3}>
                    Normally the logo is white on a black background but for the clarity of this page I chose to do the opposite
                    <br/>In a near futur, this logo is going to be used on hoodies for the students ! I will add photos when the hoodies are delivered.
                    <br/><br/>Bellow you can download all the assets version of the final logo (png and svg) :
                </Text>
                <WorkDownloadLink src="/zip/ESNA_logo_promo.zip" innerHTML="Download Assets"/>
                <Divider mb={3} mt={3}/>
                <Text mb={3}>Here is an honorable mention, PWN & Pâté 😘 : </Text>
                <WorkImage2 src="/images/works/logo-promo-esna_08.png" alt="logo promo esna 2022"/>
                <Divider mb={3} mt={3}/>


            </Container>
        </Layout>
    )
}

export default Work