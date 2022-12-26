import "./styles/navbar.css"
import logo from "../img/Logo.png"
const Navbar = () => {
	return (
		<nav className='navbar-container'>
			<div className='navbar-left'>
				<img src={logo} alt='logo' />
			</div>
			<div className='navbar-center'>
				<ul className='nav-options'>
					<li className='nav-item'>Home</li>
					<li className='nav-item'>Marketplace</li>
					<li className='nav-item'>Creators</li>
					<li className='nav-item'>Resources</li>
				</ul>
			</div>
			<button className='navbar-right'>Connect Wallet</button>
		</nav>
	)
}
export default Navbar
