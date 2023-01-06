import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'

import thumbRez0 from '../public/works/work-rez0.png'
import thumbWsus from '../public/works/work-wsus.png'
import thumbAdvanced_tools_mastery from '../public/works/work-advanced-tools-mastery.png'
import thumbLogo_promo_esna from '../public/works/work-logo-promo-esna.png'
import thumbJeux_Pythiques from '../public/works/work-jeux-pythiques-esna.png'
import Layout from '../components/layouts/article'


const Works = () => {
    return(
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4} mt={8}>
                    📌 Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="jeux-pythiques-esna" title="ESNA Jeux Pythiques" thumbnail={thumbJeux_Pythiques}>
                            It's a CTF organised by ESNA, I participated in its realization.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="advanced-tools-mastery" title="Advanced Tools Mastery" thumbnail={thumbAdvanced_tools_mastery}>
                            A vanilla inspired mod that adds new 3D version of the original minecraft tiers of tools !
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="logo-promo-esna" title="ESNA 2022 Promo Logo" thumbnail={thumbLogo_promo_esna}>
                            I realized the logo for the 2022 promotion at ESNA.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="rez0" title="REZ'0" thumbnail={thumbRez0}>
                            Networks learning app, Created by students - For everyone !
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="wsus" title="WSUS" thumbnail={thumbWsus}>
                            A windows 2016 server created for my HND that has many usefull services.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>

    )
}

export default Works