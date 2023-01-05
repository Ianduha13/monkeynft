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
					<a href='https://cardano.org/' target={"_blank"}>
						Cardano
					</a>
				</li>
				<li className='list-item'>
					<img src={BinanceUsdBadge} alt='BinanceUsdBadge' />
					<a href='https://www.binance.com/en/busd/' target={"_blank"}>
						Binance USD
					</a>
				</li>
				<li className='list-item'>
					<img src={SolanaBadge} alt='SolanaBadge' />
					<a href='https://solana.com/' target={"_blank"}>
						Solana
					</a>
				</li>
				<li className='list-item'>
					<img src={BitcoinPlusBadge} alt='bitcoinplus' />
					<a href='https://bitcoinplus.org/' target={"_blank"}>
						Bitcoin Plus
					</a>
				</li>
				<li className='list-item'>
					<img src={MetamaskBadge} alt='metamask' />
					<a href='https://metamask.io/' target={"_blank"}>
						Metamask
					</a>
				</li>
				<li className='list-item'>
					<img src={BinanceSmartBadge} alt='CardanoBadge' />
					<a href='https://www.binance.com/en' target={"_blank"}>
						Binance Smart Chain
					</a>
				</li>
			</ul>
		</section>
	)
}
export default Companies
