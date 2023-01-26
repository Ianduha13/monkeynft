import Button from "./Button"

const CreatorCard = ({ profileImg, bannerImg }) => {
	return (
		<section className='creator-card'>
			<img src={profileImg} alt='xdxd' className={`trending-img`} />
			<div className='creator-description'>
				<div className='description'>
					<h3 className='creator-name'></h3>
					<p className='author'>By</p>
					<Button text={"Follow"} color={"transparent bid highlight-btn"} />
					<Button text={"Message"} color={"transparent bid highlight-btn"} />
				</div>
				<div className='creator-data'></div>
			</div>
		</section>
	)
}
export default CreatorCard
