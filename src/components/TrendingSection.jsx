import TrendingCard from "./TrendingCard"
import Monkey from "../img/Monkey.png"

const TrendingSection = () => {
	return (
		<section className='trending-section'>
			<div className='trending-title'>TRENDING AUCTIONS</div>
			<TrendingCard
				img={Monkey}
				name={"Monkey #01"}
				author={"Stefan Brown"}
				price={"18.3 ETH"}
			/>
		</section>
	)
}
export default TrendingSection
