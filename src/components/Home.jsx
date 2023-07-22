import { useContext } from "react";
import SignContext from "../context/signContext";
import List from "./List";
import Button from "./Button";

const Home = () => {
	const { setStep, data } = useContext(SignContext);
	const signIn = "Sign In";
	return (
		<div className="home-container">
			<h2>Users</h2>
			<ul className="item nav">
				<li>Name</li>
				<li>Last Name</li>
				<li>Email</li>
				<li>Edit</li>
				<li>Delete</li>
			</ul>
			<ul className="items">
				{data.map((data) => (
					<List key={data.id} data={data} />
				))}
			</ul>

			<p
				onClick={() => {
					setStep("signin");
				}}
			>
				<Button buttonText={signIn} />
			</p>
		</div>
	);
};

export default Home;
