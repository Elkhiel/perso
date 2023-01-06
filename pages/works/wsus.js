import { Container, Badge, Text, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from "../../components/paragraph"
import { Title,WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = ( ) => {
    return (
        <Layout title="WSUS">
            <Container>
                <Title>
                    WSUS <Badge>2020-2021</Badge>
                </Title>
                <P>
                For my first year at the DUT R&T of Saint-Malo, we decided to take one of the proposed projects. The creation of a WSUS server 🗿.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Authors</Meta>
                        <span>Matthieu C, Donatien J</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tutors</Meta>
                        <span>Flavien M, Yann B</span>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <Meta>Topic</Meta>
                        <span>Installation of a "Windows Server Update Services" server for the R&T department of the HND</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Windows Server, PowerShell</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/wsus_01.png" alt="wsus"/>
                <Paragraph>
                    Nearly 90% of the world's PCs are running Windows.
                    Therefore, it is important for various reasons (security, stability, availability of applications) to keep the operating systems up to date.
                    These reasons explain the implementation of this project.
                    <br/><br/>Microsoft offers updates that are done individually on each PC of the IUT. This represents a huge amount of data because the PCs go one by one to look for their updates on the Internet. This is not optimized and uses a lot of
                    bandwidth. We must therefore create an installation similar to the simplified diagram
                    below:
                    <br/>
                </Paragraph>
                <WorkImage src="/images/works/wsus_02.png" alt="wsus"/>
                <Paragraph>
                I am pleased to report that the installation of this server was a success.
                This project was undertaken in order to improve the process of updating the operating systems on PCs running Windows.
                It is important to keep these systems up to date for the sake of security, stability, and the availability of applications.
                <br/>Our team implemented a new system, as illustrated in the simplified diagram, to optimize the update process and reduce the use of bandwidth.
                <br/><br/>I am grateful to my tutors, Flavien M and Yann B, for their guidance and support during this project.
                </Paragraph>

            </Container>
        </Layout>
    )
}

export default Work