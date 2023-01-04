import companies from "../img/Companies.png"
import "./styles/companies.css"
import CardanoBadge from "../img/CardanoBadge.svg"
import BinanceUsdBadge from "../img/BinanceUsdBadge.svg"
import SolanaBadge from "../img/SolanaBadge.svg"
import BitcoinPlusBadge from "../img/BitcoinPlusBadge.svg"
import MetamaskBadge from "../img/MetaMaskBadge.svg"
import BinanceSmartBadge from "../img/BinanceSmartChainBadge.svg"

const Companies = () => {
	return (
		<section className='companies-banner'>
			<ul className='companies-list'>
				<li className='list-item'>
					<img src={CardanoBadge} alt='CardanoBadge' />
					Cardano
				</li>
				<li className='list-item'>
					<img src={BinanceUsdBadge} alt='BinanceUsdBadge' />
					Binance USD
				</li>
				<li className='list-item'>
					<img src={SolanaBadge} alt='SolanaBadge' />
					Solana
				</li>
				<li className='list-item'>
					<img src={BitcoinPlusBadge} alt='bitcoinplus' />
					Bitcoin Plus
				</li>
				<li className='list-item'>
					<img src={MetamaskBadge} alt='metamask' />
					Metamask
				</li>
				<li className='list-item'>
					<img src={BinanceSmartBadge} alt='CardanoBadge' />
					Binance Smart Chain
				</li>
			</ul>
		</section>
	)
}
export default Companies
