import { useState } from "react"
import img from "./img/Rectangle 51.png"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<img src={img} alt='' />
		</div>
	)
}

export default App
