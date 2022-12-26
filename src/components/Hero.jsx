import Button from "./Button"
import "./styles/hero.css"
import Monkey from "../img/Monkey.png"
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
					<Button text={"CONNECT WALLET"} />
					<p>HOW IT WORKS</p>
				</div>
			</div>
			<div className='img-container'>
				<img src={Monkey} alt='Monkey' className='hero-img' />
				<div className='img-description'>
					<h3>Monkey gordo</h3>
				</div>
			</div>
		</section>
	)
}
export default Hero
