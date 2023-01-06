import Rec1 from "../img/Rectangle 51.png"
import Rec2 from "../img/Rectangle 52.png"
import Rec3 from "../img/Rectangle 53.png"
import Rec4 from "../img/Rectangle 54.png"
import Rec5 from "../img/Rectangle 55.png"
import Rec6 from "../img/Rectangle 56.png"
import TechBg from "../img/Kerfin7-NEA-2203 1.png"

const Background = () => {
	return (
		<section className='bg-section'>
			<img src={TechBg} alt='rec0' className='TechBg ' />
			<img src={Rec1} alt='rec1' className='firstBg' />
			<img src={Rec2} alt='rec2' />
			<img src={Rec3} alt='rec3' />
			<img src={Rec4} alt='rec4' />
			<img src={Rec5} alt='rec5' />
			<img src={Rec6} alt='rec6' />
		</section>
	)
}
export default Background
