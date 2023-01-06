import Button from "./Button"
import "./styles/hero.css"
import HowWorks from "../img/How it Works Button.png"
import HeroCard from "./HeroCard"
const Hero = () => {
	return (
		<section className='hero-container'>
			<div className='hero-header'>
				<h3 className='hero-h3'>THE LARGEST MONKEY NFT MARKETPLACE</h3>
				<h1 className='hero-h1'>DISCOVER RARE MONKEY NFTs</h1>
				<p>
					The world's largest marketplace for monkey <br />
					character collections non fungible token NFTs.
				</p>
				<div className='buttons'>
					<Button text={"CONNECT WALLET"} color='purple highlight-btn' />
					<img src={HowWorks} alt='howworks' className='btn-hero' />
				</div>
			</div>
			<HeroCard />
		</section>
	)
}
export default Hero
