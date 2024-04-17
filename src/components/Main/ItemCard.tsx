import { Flex, Button, Image, Text } from '@chakra-ui/react'
import FavouriteHeart from '../../icons/FavouriteHeart'
import { useState } from 'react'
import ball from '../../img/ball.webp'

const ItemCard = () => {
	const [showFavourite, setShowFavourite] = useState(false)
	const [favourite, setFavourite] = useState(false)

	const toggleFavourite = () => {
		setFavourite(!favourite)
	}
	return (
		<Flex
			p='10px'
			h='480px'
			w='280px'
			_hover={{ boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.3)' }}
			onMouseEnter={() => setShowFavourite(true)}
			onMouseLeave={() => setShowFavourite(false)}
			position='relative'
			transition='all 0.2s linear'
			direction='column'
			justify='space-between'
		>
			<Flex>
				{showFavourite && (
					<Flex
						justify='flex-end'
						position='absolute'
						top='8px'
						right='8px'
						zIndex='1'
					>
						<FavouriteHeart onClick={toggleFavourite} filled={favourite} />
					</Flex>
				)}
				<Flex direction='column' fontSize='14px' fontWeight='500' h='100%'>
					<Image src={ball} />
					<Text>Wilson Evolution Official Game Basketball</Text>
					<Text mt='10px'>$49.00</Text>
					<Text mt='10px' fontWeight='bold'>
						Zone Sjop
					</Text>
				</Flex>
			</Flex>
			<Flex justify='center'>
				<Button bg='blue' color='#fff'>
					Add to cart
				</Button>
			</Flex>
		</Flex>
	)
}

export default ItemCard
