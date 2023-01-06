import { Container, Badge, Text, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from "../../components/paragraph"
import { Title,WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = ( ) => {
    return (
        <Layout title="Jeux Pythiques">
            <Container>
                <Title>
                    Jeux Pythiques <Badge>2022-2023</Badge>
                </Title>
                <WorkImage src="/images/works/jeux-pythiques-esna_01.png" alt="jeux pythiques esna"/>
                <P>
                This game (already present in Greek mythology and the most important after the Olympic Games) will be in its modern form a development competition in Python in the form of challenges. 
                The winners, in addition to an absolute recognition of the mastery of Python, will be awarded prizes.
                This event will also be available in remote mode.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Authors</Meta>
                        <span>The 2022 promotion of ESNA</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tutor</Meta>
                        <span>Grégoire M</span>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <Meta>Topic</Meta>
                        <span>A CTF Like competition for Python</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python</span>
                    </ListItem>
                </List>

                <Text>This event is coming soon, I will add the links to register when the time comes</Text>
            </Container>
        </Layout>
    )
}

export default Work