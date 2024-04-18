import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowcasePage from './pages/ShowcasePage'
import ErrorPage from './pages/ErrorPage'

function App() {
	return (
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<ShowcasePage />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	)
}

export default App
