import FirstCreator from "../img/creators/Ellipse 304.png"
import firstBg from "../img/creators/Subtract.png"
import CreatorCard from "./CreatorCard"

const PopularCreators = () => {
	return (
		<section className='popular-creators'>
			<header className='howtobecome-header'>POPULAR CREATORS</header>
			<div className='cards-wrapper'>
				<CreatorCard profileImg={FirstCreator} bannerImg={firstBg} />
			</div>
		</section>
	)
}
export default PopularCreators
