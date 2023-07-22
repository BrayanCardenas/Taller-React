import { useState } from "react";
import SignIn from "./components/SignIn";
import SignContext from "./context/signContext";
import Home from "./components/Home";
import db from "./data/db";
import Update from "./components/Update";

function App() {
	const [modal, setModal] = useState(false);
	const [step, setStep] = useState("home");
	const [data, setData] = useState(db);
	const [id, setId] = useState("");

	return (
		<>
			<SignContext.Provider
				value={{ step, setStep, modal, setModal, data, setData, id, setId }}
			>
				<div>
					{step === "signin" && <SignIn />}
					{step === "home" && <Home />}
					{step === "update" && <Update />}
				</div>
			</SignContext.Provider>
		</>
	);
}

export default App;
