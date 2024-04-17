import {
	Box,
	Flex,
	Link,
	Text,
	Input,
	Button,
	Image,
	Divider,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import HumanSVG from '../../icons/HumanSVG'
import CartSVG from '../../icons/CartSVG'
import logo from '../../img/logo.svg'

const Header: React.FC = () => {
	const [searchInput, setSearchInput] = useState('')
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setSearchInput(event.target.value)

	return (
		<Box
			bg='#fff'
			as='header'
			w='100%'
			h='100%'
			position='sticky'
			top='0'
			zIndex='999'
		>
			<Flex
				maxW='1200px'
				p='50px 20px'
				h='40px'
				direction='row'
				justify='space-between'
				m='0 auto'
				align='center'
			>
				<Link>
					<Image src={logo} />
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
			<Divider />
		</Box>
	)
}

export default Header
