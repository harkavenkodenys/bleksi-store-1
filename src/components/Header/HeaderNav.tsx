import { Flex, Link } from "@chakra-ui/react"
import ChangeLanguageModal from "../UI/ChangeLanguageModal"

const HeaderNav = () => {
	return (
		<Flex
			maxW='1200px'
			p='0 20px'
			h='40px'
			direction='row'
			justify='space-between'
			m='0 auto'
			as='nav'
		>
			<ChangeLanguageModal defaultName='Language' />
			<Flex gap='6' h='100%' align='center'>
				<Link href='#' fontSize='12px' color='#7C818B'>
					Track Order
				</Link>
				<Link href='#' fontSize='12px' color='#7C818B'>
					Help Center
				</Link>
				<Link href='#' fontSize='12px' color='#7C818B'>
					Compare
				</Link>
				<Link href='#' fontSize='12px' color='#7C818B'>
					Wishlist
				</Link>
			</Flex>
		</Flex>
	)
}

export default HeaderNav
