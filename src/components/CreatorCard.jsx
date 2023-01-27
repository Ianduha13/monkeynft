import Button from "./Button"

const CreatorCard = ({
	profileImg,
	bannerImg,
	name,
	art,
	description,
	followers,
	following,
	special,
}) => {
	return (
		<section className={`creator-card ${special}`}>
			<img src={bannerImg} alt='xdxd' className={`banner-img`} />
			<img src={profileImg} alt='xdxd' className={`creator-img`} />
			<div className='creator-description'>
				<div className='description-text'>
					<h3 className='creator-name'>{name}</h3>
					<p className='author'>{description}</p>
				</div>
				<div className='creator-data'>
					<div className='data-column'>
						<p className='data-title'>Art Works</p>
						<h4 className='data-number'>{art}</h4>
					</div>
					<div className='data-column'>
						<p className='data-title'>Followers</p>
						<h4 className='data-number'>{followers}</h4>
					</div>
					<div className='data-column'>
						<p className='data-title'>Following</p>
						<h4 className='data-number'>{following}</h4>
					</div>
				</div>
				<div className='creator-buttons'>
					<Button text={"Follow"} color={"transparent bid highlight-btn"} />
					<Button text={"Message"} color={"transparent bid highlight-btn"} />
				</div>
			</div>
		</section>
	)
}
export default CreatorCard
