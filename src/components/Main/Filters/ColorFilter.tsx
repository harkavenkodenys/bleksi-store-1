import { Flex, Heading, Badge, Divider } from '@chakra-ui/react'

const ColorFilter: React.FC = () => {
	return (
		<Flex direction='column' align='flex-start' mt='25px'>
			<Heading fontSize='16px'>Color</Heading>
			<Flex gap='5' flexWrap='wrap' mt='15px'>
				<Badge
					fontSize='14px'
					p='20px 20px'
					cursor='pointer'
					borderRadius='50%'
					bg='red'
					_hover={{
						outline: '1px solid black',
					}}
				/>
				<Badge
					fontSize='14px'
					p='20px 20px'
					cursor='pointer'
					borderRadius='50%'
					bg='gray'
					_hover={{
						outline: '1px solid black',
					}}
				/>
				<Badge
					fontSize='14px'
					p='20px 20px'
					cursor='pointer'
					borderRadius='50%'
					bg='#F0EAD6'
					_hover={{
						outline: '1px solid black',
					}}
				/>
				<Badge
					fontSize='14px'
					p='20px 20px'
					cursor='pointer'
					borderRadius='50%'
					_hover={{
						outline: '1px solid black',
					}}
				/>
				<Badge
					fontSize='14px'
					p='20px 20px'
					cursor='pointer'
					borderRadius='50%'
					bg='#979291'
					_hover={{
						outline: '1px solid black',
					}}
				/>
			</Flex>
			<Divider mt='20px' />
		</Flex>
	)
}

export default ColorFilter
