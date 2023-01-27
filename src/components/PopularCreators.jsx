import FirstCreator from "../img/creators/Ellipse 304.png"
import firstBg from "../img/creators/Subtract.png"
import secondCreator from "../img/creators/Ellipse 304 (1).png"
import secondBg from "../img/creators/Subtract (1).png"
import thirdCreator from "../img/creators/Ellipse 304 (2).png"
import thirdBg from "../img/creators/Subtract (2).png"
import CreatorCard from "./CreatorCard"
import "./styles/creatorCard.css"

const PopularCreators = () => {
	return (
		<section className='popular-creators'>
			<header className='creators-header'>POPULAR CREATORS</header>
			<div className='cards-wrapper'>
				<CreatorCard
					special={"back-1"}
					profileImg={FirstCreator}
					bannerImg={firstBg}
					name={"Alexa Brains"}
					description={"Specialized in creating monkey NFTs"}
					art={47}
					followers={321}
					following={42}
				/>
				<CreatorCard
					profileImg={secondCreator}
					bannerImg={secondBg}
					name={"Alexa Brains"}
					description={"Specialized in creating monkey NFTs"}
					art={120}
					followers={132000}
					following={470}
				/>
				<CreatorCard
					special={"back-1"}
					profileImg={thirdCreator}
					bannerImg={thirdBg}
					name={"Alexa Brains"}
					description={"Specialized in creating monkey NFTs"}
					art={13}
					followers={12054}
					following={1200}
				/>
			</div>
		</section>
	)
}
export default PopularCreators
