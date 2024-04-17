import { Box, Flex } from '@chakra-ui/react'
import ContentHeader from './ContentHeader'
import FilterSidebar from './Filters/FiltersSidebar'
import ItemCard from './ItemCard'

const Main = () => {
	return (
		<Box maxW='1200px' p='50px 20px' m='0 auto' h='100%'>
			<Flex direction='row' h='100%'>
				<FilterSidebar />
				<Box as='section' w='100%' h='100%'>
					<ContentHeader />
					<Flex
						p='20px'
						h='100%'
						direction='row'
						flexWrap='wrap'
						gap='3'
						m='0 auto'
					>
						<ItemCard />
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}

export default Main
