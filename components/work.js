import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue, Button} from '@chakra-ui/react'
import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons'
import Modal from '@material-ui/core/Modal';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';

export const Title = ({ children }) => (
    <Box mt={10}>
        <NextLink href="/works">
            <Link>Works</Link>
        </NextLink>
    <span>
        &nbsp;
        <ChevronRightIcon/>
        &nbsp;
    </span>
    <Heading display='inline-block' as="h3" fontsize={20} mb={4}>
        {children}
    </Heading>
    </Box>

)

export const WorkImage2 = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4}/>
)

export const WorkDownloadLink = ({src,innerHTML}) => (
  <Box align="center" my={4}>
    <NextLink href={src}>
      <Button rightIcon={<DownloadIcon/>} colorScheme={useColorModeValue('purple', 'orange')}>
          {innerHTML}
      </Button>
    </NextLink>
  </Box>
)


  
export const WorkImage = ({ src, alt }) => {
    const [open, setOpen] = useState(false);
    const { width } = useWindowSize();
  
    useEffect(() => {
      if (open) {
        document.querySelector('nav').style.paddingRight = '17px';
      } else {
        document.querySelector('nav').style.paddingRight = '';
      }
    }, [open]);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
      <div>
        {width > 1000 ? (
          <Image
            onClick={handleOpen}
            borderRadius="lg"
            w="full"
            src={src}
            alt={alt}
            mb={4}
            style={{
              cursor: 'zoom-in',
            }}
          />
        ) : (
          <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
        )}
        <Modal
          onClose={handleClose}
          open={open}
          style={{
            cursor: 'pointer',
          }}
        >
          <Image
            borderRadius="lg"
            w="full"
            src={src}
            alt={alt}
            style={{
              cursor: 'default',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              margin: 'auto',
              width: '60%',
            }}
          />
        </Modal>
      </div>
    );
  };

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)