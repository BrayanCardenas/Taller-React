/* eslint-disable react/prop-types */
import Button from "./Button";
import SignContext from "../context/signContext";
import { useContext } from "react";

const VerifyData = ({ values, buttonText }) => {
	const { name, lastname, email, password } = values;
	const { setStep } = useContext(SignContext);

	function hidePassword(password) {
		const hideCharacter = "*".padStart(password.length - 2, "*");
		const lastCharacters = password.slice(-4);
		return hideCharacter + lastCharacters;
	}
	return (
		<>
			<div className="modal-container">
				<h2>Verify Data</h2>
				<p className="modal-p">Name: {name}</p>
				<p className="modal-p">Last Name: {lastname}</p>
				<p className="modal-p">Email: {email}</p>

				<p className="modal-p">Password: {hidePassword(password)}</p>

				<div
					onClick={() => {
						setStep("home");
					}}
					className="modal-btn"
				>
					<Button buttonText={buttonText.confirm} />
				</div>
			</div>
		</>
	);
};

export default VerifyData;
