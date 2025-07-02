import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { Analytics } from '@vercel/analytics/react'


const Scene = dynamic(() => import('../scene'), {
  ssr: false,
  loading: () => <div>Loading 3D scene...</div>  // optional: 로딩 중 보여줄 UI
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Junwon's homepage" />
        <meta name="author" content="Lee Jun-won" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Lee Jun-won" />
        <meta name="og:title" content="Lee Jun-won" />
        <meta property="og:type" content="website" />
        <title>Junwon - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="95ch" pt={14}>
        <Scene />
        <Box align="center" h="5em" />
        {children}
        <Analytics />
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
