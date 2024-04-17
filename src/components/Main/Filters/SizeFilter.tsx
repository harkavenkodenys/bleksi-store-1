import { Flex, Heading, Divider, Badge } from '@chakra-ui/react'

const SizeFilter = () => {
	return (
		<Flex direction='column' align='flex-start' mt='25px'>
			<Heading fontSize='16px'>Size</Heading>
			<Flex gap='5' flexWrap='wrap' mt='15px'>
				<Badge fontSize='14px' p='4px 10px' cursor='pointer' variant='outline'>
					40:80 cm
				</Badge>
				<Badge fontSize='14px' p='4px 10px' cursor='pointer' variant='outline'>
					90:120 cm
				</Badge>
				<Badge fontSize='14px' p='4px 10px' cursor='pointer' variant='outline'>
					120:150 cm
				</Badge>
				<Badge fontSize='14px' p='4px 10px' cursor='pointer' variant='outline'>
					150:170 cm
				</Badge>
				<Badge fontSize='14px' p='4px 10px' cursor='pointer' variant='outline'>
					180:200 cm
				</Badge>
			</Flex>
			<Divider mt='20px' />
		</Flex>
	)
}

export default SizeFilter
