import "./styles/button.css"
const Button = ({ text, color }) => {
	return <button className={`highlight-btn ${color}`}>{text}</button>
}
export default Button
