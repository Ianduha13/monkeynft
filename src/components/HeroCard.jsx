import Monkey from "../img/Monkey.png"

const HeroCard = () => {
	return (
		<section className='img-container'>
			<div className='img-border'>
				<img src={Monkey} alt='Monkey' className='hero-img' />
				<header className='monkey-header'>
					<h3 className='monkey-h3'>Monkey Monster</h3>
					<p className='monkey-p'> By Stefan Brown</p>
				</header>
			</div>
		</section>
	)
}
export default HeroCard
