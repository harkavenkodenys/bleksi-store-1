import { Flex, Heading, Button, Divider } from "@chakra-ui/react"

const AllCategory = () => {
  return (
		<Flex direction='column' align='flex-start' mt='25px'>
			<Heading fontSize='16px'>Categories</Heading>
			<Button
				h='fit-content'
				color='#7C818B'
				mt='15px'
				bg='none'
				_hover={{ bg: 'none', textDecor: 'underline' }}
				p='0'
			>
				All categories (3)
			</Button>
			<Button
				h='fit-content'
				color='#7C818B'
				mt='8px'
				bg='none'
				_hover={{ bg: 'none', textDecor: 'underline' }}
				p='0'
			>
				Category 1 (14)
			</Button>
			<Button
				h='fit-content'
				color='#7C818B'
				mt='8px'
				bg='none'
				_hover={{ bg: 'none', textDecor: 'underline' }}
				p='0'
			>
				Category 2 (5)
			</Button>
			<Button
				h='fit-content'
				color='#7C818B'
				mt='8px'
				bg='none'
				_hover={{ bg: 'none', textDecor: 'underline' }}
				p='0'
			>
				Category 3 (65)
			</Button>
			<Button
				h='fit-content'
				mt='8px'
				color='#7C818B'
				bg='none'
				_hover={{ bg: 'none', textDecor: 'underline' }}
				p='0'
			>
				Category 4 (36)
			</Button>
			<Divider mt='20px' />
		</Flex>
	)
}
 
export default AllCategory;