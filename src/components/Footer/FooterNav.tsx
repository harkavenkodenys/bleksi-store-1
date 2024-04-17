import { Flex, Heading, Link, Text, Image } from '@chakra-ui/react'
import logo from '../../img/logo.svg'

const FooterNav: React.FC = () => {
	return (
		<Flex justify='space-between'>
			<Flex direction='column' maxW='250px  '>
				<Image src={logo} w='168px' h='32px' />
				<Heading fontSize='18px' mt='20px'>
					Best For Shopping
				</Heading>
				<Text color='#7c818b' mt='10px' fontSize='14px' fontWeight='500'>
					Sed do eiusmod tempor incididuntut labore dolore magna.
				</Text>
			</Flex>
			<Flex justify='space-between' gap='20'>
				<Flex direction='column'>
					<Heading fontSize='16px'>Get to Know Us</Heading>
					<Link mt='15px'>About us</Link>
					<Link mt='6px'>News & Blog</Link>
					<Link mt='6px'>Carees</Link>
					<Link mt='6px'>Investoring</Link>
					<Link mt='6px'>Contact us</Link>
				</Flex>
				<Flex direction='column'>
					<Heading fontSize='16px'>Customer Service</Heading>
					<Link mt='15px'>About us</Link>
					<Link mt='6px'>News & Blog</Link>
					<Link mt='6px'>Carees</Link>
					<Link mt='6px'>Investoring</Link>
					<Link mt='6px'>Contact us</Link>
				</Flex>
				<Flex direction='column'>
					<Heading fontSize='16px'>Orders & Returns</Heading>
					<Link mt='15px'>About us</Link>
					<Link mt='6px'>News & Blog</Link>
					<Link mt='6px'>Carees</Link>
					<Link mt='6px'>Investoring</Link>
					<Link mt='6px'>Contact us</Link>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default FooterNav
