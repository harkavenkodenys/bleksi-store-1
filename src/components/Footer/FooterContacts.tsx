import { Flex, Link, Text } from '@chakra-ui/react'
import CallOutbound from '../../icons/CallOutbound'
import SendMail from '../../icons/SendMail'

const FooterContacts = () => {
	return (
		<Flex gap='12'>
			<Flex direction='column' color='#1d2128' maxW='150px'>
				<CallOutbound />
				<Text fontWeight='500' mt='8px'>
					Call
				</Text>
				<Text mt='10px'>Call us from 8am to 12am ET.</Text>
				<Link type='phone' fontWeight='500' mt='8px' href='tel:1-866-237-8289'>
					1-866-237-8289
				</Link>
			</Flex>
			<Flex direction='column' color='#1d2128' maxW='150px'>
				<SendMail />
				<Text fontWeight='500' mt='8px'>
					Email
				</Text>
				<Text mt='10px'>Our response time is 1 to 3 business days.</Text>
				<Link href='mailto:post@gmail.com' fontWeight='500' mt='8px'>
					Send a Message
				</Link>
			</Flex>
		</Flex>
	)
}

export default FooterContacts
