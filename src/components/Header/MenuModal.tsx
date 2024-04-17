import {
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Box,
	Text,
} from '@chakra-ui/react'

function MenuModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<Box textAlign='center' onClick={onOpen}>
				<Box bg='purple' h='140px' w='140px'></Box>
				<Text>Item1</Text>
			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent position='absolute'>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>item</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default MenuModal
