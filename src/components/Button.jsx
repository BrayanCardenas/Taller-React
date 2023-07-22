import SignContext from "../context/signContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ buttonText }) => {
	const { setModal } = useContext(SignContext);
	const confirm = () => {
		setModal(false);
	};

	return (
		<button type="submit" className={`btn ${buttonText}`} onClick={confirm}>
			{buttonText}
		</button>
	);
};

export default Button;
