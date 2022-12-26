import Background from "./components/Background"
import Companies from "./components/Companies"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
	return (
		<div className='App'>
			<Background />
			<Navbar />
			<Hero />
			<Companies />
		</div>
	)
}

export default App
