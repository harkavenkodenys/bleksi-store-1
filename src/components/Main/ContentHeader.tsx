import { Flex, Select, Text } from '@chakra-ui/react'

const ContentHeader = () => {
	return (
		<Flex align='center' justify='space-between' h='40px' w='100%'>
			<Flex borderBottom='1px solid gray' p='4px 5px'>
				<Text fontWeight='Bold' color='#7C818B' fontSize='14px'>
					16-24 of 54 results
				</Text>
			</Flex>
			<Flex
				align='center'
				h='100%'
				justify='center'
				borderBottom='1px solid gray'
				p='4px 5px'
			>
				<Text
					fontWeight='Bold'
					color='#7C818B'
					fontSize='14px'
					whiteSpace='nowrap'
					mr='8px'
				>
					Sort by:
				</Text>
				<Select placeholder='Select option' maxW='150px' size='sm'>
					<option value='option1'>Popularity</option>
					<option value='option2'>Avarage rating</option>
					<option value='option3'>Latest</option>
				</Select>
			</Flex>
		</Flex>
	)
}

export default ContentHeader
