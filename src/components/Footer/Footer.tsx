import {
	Box,
	Divider,
	Flex,
	Link,
	Text,
} from '@chakra-ui/react'
import FooterContacts from './FooterContacts'
import FooterSubscribeForm from './FooterSubcribeForm'
import FooterNav from './FooterNav'

const Footer: React.FC = () => {
	return (
		<Box maxW='1200px' p='40px 20px' h='40px' m='0 auto'>
			<Flex justify='space-between'>
				<FooterContacts />
				<FooterSubscribeForm />
			</Flex>
			<Divider m='40px 0' />
			<FooterNav />
			<Divider m='40px 0' />
			<Flex gap='15' mb='30px'>
				<Link color='#7c818b' fontSize='12px'>
					Privacy Policy
				</Link>
				<Link color='#7c818b' fontSize='12px'>
					Terms of Use
				</Link>
				<Link color='#7c818b' fontSize='12px'>
					Legal
				</Link>
				<Link color='#7c818b' fontSize='12px'>
					Site Map
				</Link>
			</Flex>
			<Text textAlign='center' fontWeight='500' fontSize='12px' pb='20px'>
				Copyright © 2024 Motta, All rights reserved.
			</Text>
		</Box>
	)
}

export default Footer
