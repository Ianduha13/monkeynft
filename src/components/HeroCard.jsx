import Monkey from "../img/Monkey.png"

const HeroCard = () => {
	return (
		<section className='img-container'>
			<div className='img-border'>
				<img src={Monkey} alt='Monkey' className='hero-img' />
				<p className='img-description'>Monkey gordo</p>
			</div>
		</section>
	)
}
export default HeroCard
