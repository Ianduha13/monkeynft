import Monkey from "../img/Monkey.png"
import EthPriceIcon from "../img/EthPriceIcon.png"
import Button from "./Button"
import "./styles/heroCard.css"

const HeroCard = () => {
	return (
		<section className='img-container'>
			<div className='img-border'>
				<img src={Monkey} alt='Monkey' className='hero-img' />
				<header className='monkey-header'>
					<div className='header-left'>
						<h3 className='monkey-h3'>Monkey Monster</h3>
						<p className='monkey-p'> By Stefan Brown</p>
						<div className='hero-price'>
							<img
								src={EthPriceIcon}
								alt='eth-icon'
								className='eth-hero-icon'
							/>
							<h3>18.3 ETH</h3>
						</div>
					</div>
					<Button text={"Place a Bid"} color={"black"} />
				</header>
			</div>
		</section>
	)
}
export default HeroCard
