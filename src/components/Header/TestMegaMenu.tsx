import {
	Flex,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Link,
	Box,
	Text,
} from '@chakra-ui/react'
import { useState } from 'react'

const TestMegaMenu = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const checkModal = () => {
		isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
	}
	return (
		<Flex overflowX='auto' h='500px'>
			<Tabs w='100%' display='flex' flexDirection='column'>
				<TabList position='sticky' top='0' bg='white' zIndex='1' width='100%'>
					<Tab>Категорія 1</Tab>
					<Tab>Категорія 2</Tab>
					<Tab>Категорія 3</Tab>
				</TabList>

				<TabPanels w='100%' overflowX='scroll'>
					<TabPanel w='100%' h='200px'>
						<Flex gap='20px' position='absolute' h='200px'>
							<Box textAlign='center' onClick={checkModal}>
								<Box bg='purple' h='140px' w='140px'></Box>
								<Text>Item2</Text>
								{isModalOpen && (
									<Box zIndex='3'>
										<Flex direction='column' bg='#fff' borderRadius='12px'>
											<Link>Link 1</Link>
											<Link>Link 2</Link>
											<Link>Link 3</Link>
											<Link>Link 4</Link>
										</Flex>
									</Box>
								)}
							</Box>
							<Box textAlign='center'>
								<Box bg='purple' h='140px' w='140px'></Box>
								<Text>Item2</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='purple' h='140px' w='140px'></Box>
								<Text>Item3</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='purple' h='140px' w='140px'></Box>
								<Text>Item4</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='purple' h='140px' w='140px'></Box>
								<Text>Item5</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='purple' h='140px' w='140px'></Box>
								<Text>Item6</Text>
							</Box>
						</Flex>
					</TabPanel>
					<TabPanel w='100%' h='200px'>
						<Flex gap='20px' position='absolute' h='200px'>
							<Box textAlign='center'>
								<Box bg='red' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='red' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='red' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='red' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='red' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
						</Flex>
					</TabPanel>
					<TabPanel w='100%' h='200px'>
						<Flex gap='20px' position='absolute' h='200px'>
							<Box textAlign='center'>
								<Box bg='green' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='green' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='green' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='green' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='green' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
							<Box textAlign='center'>
								<Box bg='green' h='140px' w='140px'></Box>
								<Text>Item</Text>
							</Box>
						</Flex>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	)
}

export default TestMegaMenu
