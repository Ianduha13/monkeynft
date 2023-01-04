const TrendingCard = ({ name, author, price, img }) => {
	return (
		<section className='trending-card'>
			<img src={img} alt={name} />
			<div className='description'>
				<h3 className='monkey-name'>{name}</h3>
				<p className='author'>{author}</p>
				<h3 className='monkey-price'>{price}</h3>
			</div>
			<div className='card-btns'>
				<div className='time'>7h: 4m: 8s</div>
				<button className='btn-dark'>Place a Bid</button>
			</div>
		</section>
	)
}
export default TrendingCard
