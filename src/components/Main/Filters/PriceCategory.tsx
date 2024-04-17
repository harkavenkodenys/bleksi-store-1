import {
	Flex,
	Heading,
	Divider,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
	Text,
	Input,
	Button,
	Checkbox,
} from '@chakra-ui/react'
import { useState } from 'react'

const PriceCategory: React.FC = () => {
	const [minPrice, setMinPrice] = useState<number>(0)
	const [maxPrice, setMaxPrice] = useState<number>(100000)

	const handleSliderChange = (newValues: number[]): void => {
		setMinPrice(newValues[0])
		setMaxPrice(newValues[1])
	}

	const handleMinInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const newValue: number = parseInt(event.target.value)
		setMinPrice(newValue)
		if (newValue > maxPrice) {
			setMaxPrice(newValue)
		}
	}

	const handleMaxInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const newValue: number = parseInt(event.target.value)
		setMaxPrice(newValue)
		if (newValue < minPrice) {
			setMinPrice(newValue)
		}
	}

	const handleUpdateMinMax = (): void => {
		// логіка для запиту на бек
	}

	return (
		<Flex direction='column' align='flex-start' mt='25px'>
			<Heading fontSize='16px'>Price</Heading>
			<Checkbox mt='15px' color='#7C818B' fontSize='14px'>
				From 0 to 5 000
			</Checkbox>
			<Checkbox mt='8px' color='#7C818B' fontSize='14px'>
				From 5 000 to 25 000
			</Checkbox>
			<Checkbox mt='8px' color='#7C818B' fontSize='14px'>
				From 25 000 to 50 000
			</Checkbox>
			<Checkbox mt='8px' color='#7C818B' fontSize='14px'>
				From 50 000 to 100 000
			</Checkbox>
			<RangeSlider
				mt='15px'
				aria-label={['min', 'max']}
				defaultValue={[0, 100000]}
				min={0}
				max={100000}
				onChange={handleSliderChange}
			>
				<RangeSliderTrack>
					<RangeSliderFilledTrack />
				</RangeSliderTrack>
				<RangeSliderThumb index={0} />
				<RangeSliderThumb index={1} />
			</RangeSlider>
			<Text mt='4'>
				From {minPrice ? minPrice : 0} UAH to {maxPrice ? maxPrice : 0} UAH
			</Text>

			<Flex mt='10px'>
				<Input
					type='number'
					placeholder='From'
					value={minPrice}
					onChange={handleMinInputChange}
					mr='10px'
				/>
				<Input
					type='number'
					placeholder='To'
					value={maxPrice}
					onChange={handleMaxInputChange}
				/>
			</Flex>

			<Button
				onClick={handleUpdateMinMax}
				mt='10px'
				bg='#20232C'
				color='#fff'
				_hover={{ bg: '#eee', color: '#20232C' }}
			>
				Apply
			</Button>

			<Divider mt='20px' />
		</Flex>
	)
}

export default PriceCategory
