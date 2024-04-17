import { Flex, Heading, Input, Button, Text } from '@chakra-ui/react'

const FooterSubscribeForm: React.FC = () => {
	return (
		<Flex direction='column'>
			<Heading fontSize='28px' color='#1d2128'>
				Let’s keep in touch
			</Heading>
			<Text fontSize='14px' color='#1d2128' m='12px 0'>
				Get recommendations, tips, updates, promotions and more.
			</Text>
			<Flex mt='5px'>
				<Input
					placeholder='Enter your email adress'
					h='60px'
					style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
				/>
				<Button
					bg='blue'
					color='#fff'
					ml='10px'
					h='60px'
					style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
					_hover={{}}
				>
					Subscribe
				</Button>
			</Flex>
		</Flex>
	)
}

export default FooterSubscribeForm
