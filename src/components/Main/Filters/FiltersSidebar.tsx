import { Flex, Text } from '@chakra-ui/react'
import FilterSVG from '../../../icons/FilterSVG'
import AllCategory from './AllCategory'
import PriceCategory from './PriceCategory'
import SizeFilter from './SizeFilter'
import ColorFilter from './ColorFilter'

const FilterSidebar: React.FC = () => {
	return (
		<Flex>
			<Flex w='250px' direction='column'>
				<Flex w='100px' borderBottom='1px solid gray' p='4px 5px'>
					<FilterSVG />
					<Text fontWeight='Bold' color='#7C818B' fontSize='14px' ml='4px'>
						Settings
					</Text>
				</Flex>
				<AllCategory />
				<PriceCategory />
				<SizeFilter />
				<ColorFilter />
			</Flex>
		</Flex>
	)
}

export default FilterSidebar
