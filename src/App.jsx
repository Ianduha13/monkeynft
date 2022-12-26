import { useState } from "react"
import Background from "./components/Background"
import Navbar from "./components/Navbar"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<Background>
				<Navbar />
			</Background>
		</div>
	)
}

export default App
