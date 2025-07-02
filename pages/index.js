import { useState } from 'react';
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Collapse
} from '@chakra-ui/react'
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoMailUnread, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Home = () => {
  const [showOldNews, setShowOldNews] = useState(false);
  const [showMap, setShowMap] = useState(false);
  return (
  <Layout>
    <Container maxW="container.2xl">

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lee Jun-won
          </Heading>
          <p>Prospective Graduate Student</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ base: 0, md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={`${basePath}/images/junwon.jpg`}
              alt="Profile image"
              width="150"
              height="150"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          Hello! I received a Bachelor's degree in{' '}
          <Link
            href="https://chem.hanyang.ac.kr/frontpage.asp?catalogid=hychem2&language=ko"
            isExternal
            display="inline"
            textDecoration="none"
            letterSpacing="normal"
            fontWeight="normal"
            _hover={{
              textDecoration: 'underline',
              color: 'teal.300',
            }}
          >
            Chemistry from Hanyang University
          </Link>
          . I am currently a master's student in the Department of Chemistry at KAIST.{' '}
          <Link
            href="https://scale.kaist.ac.kr/"
            isExternal
            display="inline"
            textDecoration="none"
            letterSpacing="normal"
            fontWeight="normal"
            _hover={{
              textDecoration: 'underline',
              color: 'teal.300',
            }}
          >
            SCALE Lab at KAIST
          </Link>{' '}
          under the supervision of{' '}
          <Link
            href="https://bi.snu.ac.kr/members/byoung-tak-zhang.html"
            isExternal
            display="inline"
            textDecoration="none"
            letterSpacing="normal"
            fontWeight="normal"
            _hover={{
              textDecoration: 'underline',
              color: 'teal.300',
            }}
          >
            Prof. Park-jeong yeong
          </Link>
          .
          <br />
          &nbsp;&nbsp;My research interests focus on surface chemistry as well as measurement and inspection (MI). 
          Specifically, I am studying the device characteristics of highly integrated memory semiconductors, 
          improving critical dimensions (CD), and enhancing microscopic resolution under atmospheric conditions. 
          Upon completing my master's degree, I am scheduled to join Samsung Electronics through the S-EPSS recruitment track.


        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/publications"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            publications
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <BioSection>
          <BioYear>2025</BioYear>
          Joined in 2025 the master’s program in Chemistry at KAIST.

          Graduated in Aug 2025 from Chemistry, Hanyang University.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading
          as="h3"
          variant="section-subtitle"
          fontSize="lg"
          fontWeight="normal"
          cursor="pointer"
          onClick={() => setShowOldNews(!showOldNews)}
          display="flex"
        >
          Old News
          {showOldNews ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Heading>
        <Collapse in={showOldNews} animateOpacity>
          {/* <BioSection>
            <BioYear>2023.05</BioYear>
            non.
          </BioSection> */}
        </Collapse>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Info
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/lcwoo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto: junwon6937@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailUnread />}
              >
                e-mail
              </Button>
            </Link>
          </ListItem>
         
          <ListItem>
            <Link href="https://www.instagram.com/laffkw/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @_laffkw
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>  

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Gangseo High School
        </BioSection>

        <BioSection>
          <BioYear>2021</BioYear>
          Second year completion, Sejong University, Dept. of Chemistry
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          B.S., Hanyang University, Dept. of Chemistry(Summa Cum Laude)
        </BioSection>
        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          AWARDS AND HONORS
        </Heading>
        <BioSection>
          <BioYear>Feb. 2025</BioYear>
          Question-Based-Learning Competition-Excellence Award, Hanyang university
        </BioSection>

        <BioSection>
          <BioYear>Feb. 2024</BioYear>
          Merit Based Scholarship, Hanyang university
        </BioSection>

      </Section>

      <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Experience
      </Heading>
      
      <BioSection>
        <BioYear>2023.07 – 2023.09</BioYear>
        Undergraduate Researcher, Super-resolution Spectroscopic Microscopy Lab
      </BioSection>

      <BioSection>
        <BioYear>2024.07 – 2024.09</BioYear>
        Long-term training program at Device Solutions, Samsung Electronics
      </BioSection>

      <BioSection>
        <BioYear>2024.07 – 2024.09</BioYear>
        Undergraduate Researcher, Nanohybrid Thin-Film Lab
      </BioSection>

 
    </Section>

      <Box align="center" h="5em">
      </Box>


    </Container>
  </Layout>
  );
};


export default Home
export { getStaticProps } from '../components/chakra'