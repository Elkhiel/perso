import { Container, Badge, Text, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from "../../components/paragraph"
import { Title,WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = ( ) => {
    return (
        <Layout title="REZ'0">
            <Container>
                <Title>
                    REZ'0 <Badge>2021-2022</Badge>
                </Title>
                <P>
                For my second year at the DUT R&T of Saint-Malo, we decided to create our own project. The realization of a complete website, in order to learn network 🗿.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Authors</Meta>
                        <span>Matthieu C, Donatien J</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tutors</Meta>
                        <span>Jean-Claude N, Michel G</span>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <Meta>Topic</Meta>
                        <span>Rez'0 - Website to learn network</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JS, PHP, Firebase, SQL</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/rez0_01.png" alt="rez0"/>
                <Text mb={3}>Here is an example of a lesson that can be found on the site : </Text>
                <WorkImage src="/images/works/rez0_02.png" alt="rez0"/>
                <Paragraph>
                Today, there are a lot of resources on the internet to learn all kinds of things.
                Ranging from a simple recipe, to a complete tutorial to set up complex protocols on a professional server.
                <br/><br/>On the other hand, the observation that we made between R&T students is the following :
                Although we consume a lot of online content, the vast majority of us had no real
                real network knowledge.
                <br/><br/>This phenomenon may be partly due to the fact that the network, at first glance, may seem "cluttered".
                <br/>This makes it more complicated to grasp for a neophyte without guidance. It is therefore from this reflection that
                the concept of our project came to us:
                <br/><br/>✨ Create a website for the general public, allowing an accessible learning of the network.
                </Paragraph>
            </Container>
        </Layout>
    )
}

export default Work