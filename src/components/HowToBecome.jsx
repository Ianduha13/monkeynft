import BgRectangle from "../img/howtobecomesection/Rectangle 22698.png"
import vector1 from "../img/howtobecomesection/grid-3.png"
import vector2 from "../img/howtobecomesection/wallet-money.png"
import vector3 from "../img/howtobecomesection/Vector.png"
import "./styles/howtobe.css"
const HowToBecome = () => {
	return (
		<section className='howtobecome'>
			<img src={BgRectangle} alt='rectangle bg' className='howtobecomebg' />
			<header className='howtobecome-header'>
				HOW TO BECOME MONKEY NFT CREATOR
			</header>
			<div className='container'>
				<div className='card-container-bottom'>
					<div className='card-bottom'>
						<img src={vector1} alt='vector1' className='img-vector' />
						<h3 className='theme-title'>CONNECT YOUR WALLET</h3>
						<p className='theme-description'>
							Connect your Wallet, <br />
							use the pink button in the left of <br />
							the Header. Now you can use any feature.
						</p>
					</div>
				</div>
				<div className='card-container-top'>
					<div className='card-top'>
						<img src={vector2} alt='vector1' className='img-vector' />
						<h3 className='theme-title'>CREATE ARTWORK</h3>
						<p className='theme-description'>
							Create your NFT collection. <br />
							Add social links, profile and banner image. <br />
							Set a secondary sales fee for your artwork.
						</p>
					</div>
				</div>
				<div className='card-container-bottom'>
					<div className='card-bottom'>
						<img src={vector3} alt='vector1' className='img-vector' />
						<h3 className='theme-title'>UPLOAD YOUR NFTS</h3>
						<p className='theme-description'>
							Upload. Add a title & description. <br />
							Costumize your NFT’s, properties,
							<br />
							stats and unlockable content.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default HowToBecome
