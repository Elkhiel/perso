import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'

import thumbRez0 from '../public/works/work-rez0.png'
import thumbWsus from '../public/works/work-wsus.png'

const Works = () => {
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={8}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="rez0" title="Rez'0" thumbnail={thumbRez0}>
                        Networks learning app, Created by students - For everyone !
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="wsus" title="WSUS" thumbnail={thumbWsus}>
                        A windows 2016 server created for my HND that has many usefull services.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="rez0" title="Rez'0" thumbnail={thumbRez0}>
                        Networks learning app, Created by students - For everyone !
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="wsus" title="WSUS" thumbnail={thumbWsus}>
                        A windows 2016 server created for my HND that has many usefull services.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="rez0" title="Rez'0" thumbnail={thumbRez0}>
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
    )
}

export default Works