import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18;
display: inline-flex;
align-items: center;
height:30;
line-height:20px;
padding:10px;

img {
    transition: 200ms ease;
}

&:hover img{
    tranform:rotate(20deg);
}
`

const Logo = ( ) => {
    const rez0img = `/images/rez0_logo_small.png`

    return(
        <Link href='/' scroll={false}>
            <a>
                <LogoBox>
                    <Image src={rez0img} width={40} height={40} alt="logo"/>
                    <Text
                    color={useColorModeValue('gray.800','whiteALpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight='bold'
                    ml={3}>
                        Matthieu Carbonnier
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo