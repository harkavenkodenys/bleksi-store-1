import { Heading, Divider, Box } from '@chakra-ui/react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HeaderNav from '../components/Header/HeaderNav'
import Main from '../components/Main/Main'
import TestModal from '../components/Header/TestModal'

const ShowcasePage = () => {
	return (
		<>
			<HeaderNav />
			<Header />
			<Box maxW='1200px' p='50px 20px' m='0 auto' textAlign='center'>
				<TestModal />
			</Box>
			<Main />
			<Divider />
			<Footer />
		</>
	)
}

export default ShowcasePage
