import { Box, ChakraProvider, Divider, Heading } from '@chakra-ui/react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/Header/HeaderNav'

function App() {
	return (
		<ChakraProvider>
			<HeaderNav />
			<Header />
			<Box maxW='1200px' p='50px 20px' m='0 auto' textAlign='center'>
				<Heading>Some mega menu</Heading>
			</Box>
			<Main />
			<Divider />
			<Footer />
		</ChakraProvider>
	)
}

export default App
