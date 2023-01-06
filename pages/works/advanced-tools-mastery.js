import { Container, Badge, Heading, Text , Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from "../../components/paragraph"
import Section from "../../components/section"
const Work = ( ) => {
    return (
        <Layout title="Advanced Tools Mastery">
            <Container>
                <Title>
                    ATM <Badge>2022</Badge>
                </Title>
                <Section delay={0.1}>
                    <WorkImage src="/images/works/advanced-tools-mastery_01.png" alt="advanced tools mastery"/>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Author</Meta>
                            <span>Matthieu C</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Downloads Links</Meta>
                            {''}
                        <Link href='https://www.curseforge.com/minecraft/mc-mods/advanced-tools-mastery-fabric' isExternal>
                            CurseForge <ExternalLinkIcon/>
                        </Link>
                        &nbsp;{''}
                        <Link href='https://modrinth.com/mod/advanced-tools-mastery' isExternal>
                            Modrinth <ExternalLinkIcon/>
                        </Link>
                        </ListItem>
                        <br/>
                        <ListItem>
                            <Meta>Topic</Meta>
                            <span>Minecraft mod that add new special items and behaviour</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>JAVA, Frabric</span>
                        </ListItem>
                    </List>


                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" mt={10} variant="section-title">
                    📚 About
                    </Heading>
                    <P>
                    Advanced Tools Mastery is a vanilla inspired mod that adds new 3D version of the original minecraft tiers of tools ! It also adds new 3D swords and magical staff for the Bosses of vanilla minecraft.
                    </P>

                    <Heading as="h3" mt={10} variant="section-title">
                    🎮 Content
                    </Heading>
                    <Text>
                    ✔️ All ore tiers now have an advanced version for the crafting recipe of this mod
                    <br/>✔️ Iron/Gold/Diamond and Netherite has now a new 3D version for all the tools and swords !
                    <br/>✔️ Craftable 3D Wither war hammer, allowing to launch explosive wither skulls 💀
                    <br/>✔️ Craftable 3D Ender Dragon Staff with magical power imitating the famous dragon
                    </Text>

                    <Heading as="h3" mt={10} variant="section-title">
                    🔧 Crafting recipes
                    </Heading>
                    <Text>
                    Most of the crafting recipes are intuitive and similar to Vanilla Minecraft.
                    <br/>For more detailed craftings recipes, you can check the link above.
                    </Text>

                    <Heading as="h3" mt={10} variant="section-title">
                    📍 Compatibility
                    </Heading>
                    <Text>
                    Advanced Tools Mastery is compatible with modpack such as the {''}
                        <Link href='https://www.curseforge.com/minecraft/modpacks/better-mc-fabric' isExternal>
                            Better MC [FABRIC] <ExternalLinkIcon/>
                        </Link>
                    </Text>

                    <Heading as="h3" mt={10} variant="section-title">
                    📣 Disclaimer
                    </Heading>
                    <Text>
                        This mod is only distributed through CurseForge and Modrinth. Please do not redistribute this mod or download this mod from any other download source.
                        <br/>For more detail on mod reposts, and how to stay protected against them, visit: {''}
                        <Link href='stopmodreposts.org' isExternal>
                            stopmodreposts.org <ExternalLinkIcon/>
                        </Link>
                        <br/>You can do what you want with this mod, just credit the author.
                    </Text>
                </Section>                
                <Paragraph>
                </Paragraph>
            </Container>
        </Layout>
    )
}

export default Work