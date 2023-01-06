import "./styles/button.css"
const Button = ({ text, color }) => {
	return <button className={`btn ${color}`}>{text}</button>
}
export default Button
