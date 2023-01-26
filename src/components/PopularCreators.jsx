import FirstCreator from "../img/creators/Ellipse 304.png"
import firstBg from "../img/creators/Subtract.png"
import CreatorCard from "./CreatorCard"
import "./styles/creatorCard.css"

const PopularCreators = () => {
	return (
		<section className='popular-creators'>
			<header className='howtobecome-header'>POPULAR CREATORS</header>
			<div className='cards-wrapper'>
				<CreatorCard
					profileImg={FirstCreator}
					bannerImg={firstBg}
					name={"Alexa Brains"}
					description={"Specialized in creating monkey NFTs"}
					art={47}
					followers={321}
					following={42}
				/>
			</div>
		</section>
	)
}
export default PopularCreators
