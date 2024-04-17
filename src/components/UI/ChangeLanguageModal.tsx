import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Select,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

const ChangeLanguageModal = ({ defaultName }: { defaultName: string }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [language, setLanguage] = useState(
		localStorage.getItem('selectedLanguage') || 'Select option'
	)
	const [currency, setCurrency] = useState(
		localStorage.getItem('selectedCurrency') || 'Select option'
	)
	const [name, setName] = useState(defaultName)

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)

	const handleLanguageChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedLanguage = event.target.value
		setLanguage(selectedLanguage)
		localStorage.setItem('selectedLanguage', selectedLanguage)
	}

	const handleCurrencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedCurrency = event.target.value
		setCurrency(selectedCurrency)
		localStorage.setItem('selectedCurrency', selectedCurrency)
	}

	const handleSave = () => {
		setName(`${language} / ${currency}`)
		onClose()
	}

	useEffect(() => {
		setName(`${language} / ${currency}`)
	}, [language, currency])

	return (
		<>
			<Button
				onClick={onOpen}
				bg='none'
				_hover={{ bg: 'none' }}
				fontSize='12px'
				color='#7C818B'
				p='0'
			>
				{name}
			</Button>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Preferences</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Select
							value={language}
							onChange={handleLanguageChange}
							placeholder={language}
						>
							<option value='English'>English</option>
							<option value='French'>French</option>
						</Select>

						<Select
							value={currency}
							onChange={handleCurrencyChange}
							placeholder={currency}
							mt='16px'
						>
							<option value='USA dollar'>USA dollar</option>
							<option value='European Euro'>European Euro</option>
						</Select>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' onClick={handleSave} w='100%'>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default ChangeLanguageModal
