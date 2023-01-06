import Background from "./components/Background"
import Companies from "./components/Companies"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import TrendingSection from "./components/TrendingSection"

const App = () => {
	return (
		<div className='App'>
			<Background />
			<Navbar />
			<Hero />
			<Companies />
			<TrendingSection />
		</div>
	)
}

export default App
