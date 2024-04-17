import { Box, Flex } from '@chakra-ui/react'
import ContentHeader from './ContentHeader'
import FilterSidebar from './Filters/FiltersSidebar'

const Main = () => {
	return (
		<Box maxW='1200px' p='50px 20px' m='0 auto'>
			<Flex direction='row'>
				<FilterSidebar />
				<ContentHeader />
			</Flex>
		</Box>
	)
}

export default Main
