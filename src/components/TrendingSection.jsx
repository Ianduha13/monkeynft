import TrendingCard from "./TrendingCard"
import Monkey1 from "../img/trending/3817d629e3b48d2c7c24eb815ba368b4-removebg 2.png"
import Monkey2 from "../img/trending/3ba7ba08542ef0ec7a303dfcce44e86b-removebg-preview 1.png"
import Monkey3 from "../img/trending/5a470a3750a001d142cc20b04ce753f0-removebg-preview 1.png"
import Monkey4 from "../img/trending/ab22a451d759f67dfcacf8f2a496f082-removebg-preview 1.png"
import "./styles/trending-section.css"

const TrendingSection = () => {
	return (
		<section className='trending-section'>
			<header className='trending-title'>
				<h2>TRENDING AUCTIONS</h2>
			</header>
			<section className='cards-wrapper'>
				<TrendingCard
					img={Monkey1}
					name={"Monkey #01"}
					author={"Stefan Brown"}
					price={"18.3 ETH"}
					special='special'
				/>
				<TrendingCard
					img={Monkey2}
					name={"Monkey #43"}
					author={"Gloria Milt"}
					price={"12.1 ETH"}
				/>
				<TrendingCard
					img={Monkey3}
					name={"Monkey #55"}
					author={"Laura Petrova"}
					price={"17.8 ETH"}
				/>
				<TrendingCard
					img={Monkey4}
					name={"Monkey #25"}
					author={"Chris Kostov"}
					price={"12.6 ETH"}
				/>
			</section>
		</section>
	)
}
export default TrendingSection
