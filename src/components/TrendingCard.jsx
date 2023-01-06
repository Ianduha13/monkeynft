import Button from "./Button"
import EthPriceIcon from "../img/EthPriceIcon.png"
import "./styles/trending-card.css"
const TrendingCard = ({ name, author, price, img, special }) => {
	return (
		<section className='trending-card'>
			<img src={img} alt={name} className={`${special} trending-img`} />
			<div className='card-description'>
				<div className='description'>
					<h3 className='monkey-name'>{name}</h3>
					<p className='author'>By {author}</p>
					<h3 className='monkey-price'>
						<img
							src={EthPriceIcon}
							alt='eth-icon'
							className='eth-trending-icon'
						/>
						{price}
					</h3>
				</div>
				<div className='card-btns'>
					<Button text={"7h: 4m: 8s"} color={"transparent"} />
					<Button
						text={"Place a Bid"}
						color={"transparent bid highlight-btn"}
					/>
				</div>
			</div>
		</section>
	)
}
export default TrendingCard
