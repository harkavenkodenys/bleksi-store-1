import { Box, Flex, Heading, Link, Text, Input, Button } from '@chakra-ui/react'
import ChangeLanguageModal from './UI/ChangeLanguageModal'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import HumanSVG from '../icons/HumanSVG'
import CartSVG from '../icons/CartSVG'

const Header = () => {
	const [searchInput, setSearchInput] = React.useState('')
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setSearchInput(event.target.value)

	return (
		<Box as='header' w='100%' h='100%'>
			{/* header nav */}
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
			{/* header content */}
			<Flex
				maxW='1200px'
				p='50px 20px'
				h='40px'
				direction='row'
				justify='space-between'
				m='0 auto'
				align='center'
			>
				{/* Link logo to self */}
				<Link>
					<Heading>LOGO</Heading>
				</Link>
				<Flex>
					<Input
						h='60px'
						w='545px'
						value={searchInput}
						onChange={handleChange}
						placeholder='Search for anything'
					/>

					<Button
						h='60px'
						w='60px'
						bg='blue'
						_hover={{ bg: 'blue' }}
						ml={'10px'}
					>
						<SearchIcon color='#fff' />
					</Button>
				</Flex>
				<Flex gap='6'>
					<Link href='#' fontSize='14px' fontWeight='bold'>
						<Flex>
							<HumanSVG />
							<Text ml='4px'>Account</Text>
						</Flex>
					</Link>
					<Link href='#' fontSize='14px' fontWeight='bold'>
						<Flex>
							<CartSVG />
							<Text ml='4px'>Cart</Text>
						</Flex>
					</Link>
				</Flex>
			</Flex>
		</Box>
	)
}

export default Header
