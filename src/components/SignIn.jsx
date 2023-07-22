import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpSchema } from "../schemas/singUpSchema";
import VerifyData from "./VerifyData";
import Button from "./Button";
import SignContext from "../context/signContext";
import { v4 as uuidv4 } from "uuid";

const SignIn = () => {
	const initialValues = {
		id: uuidv4(),
		name: "",
		lastname: "",
		email: "",
		password: "",
		confirm: "",
	};
	const buttonText = {
		confirm: "Confirm",
		signIn: "Sign In",
	};
	const [value, setValue] = useState(initialValues);
	const { modal, setModal, data, setData } = useContext(SignContext);

	const onAdd = (values) => {
		setData([...data, values]);
	};

	const onSubmit = (values, actions) => {
		setValue(values);
		if (values && modal === false) actions.resetForm();
		if (values) setModal(!modal);
		onAdd(values);
	};
	return (
		<>
			<div className="form-container">
				<h2 className="title">Sign In</h2>
				<Formik
					initialValues={initialValues}
					validationSchema={signUpSchema}
					onSubmit={onSubmit}
				>
					<Form className="form" autoComplete="off">
						<fieldset className="input-group">
							<label htmlFor="name">Name</label>
							<Field type="text" id="name" name="name" autoFocus />
							<ErrorMessage
								name="name"
								component="p"
								className="error-message"
							/>
						</fieldset>
						<fieldset className="input-group">
							<label htmlFor="lastname">Last Name</label>
							<Field type="text" name="lastname" id="lastname" required />
							<ErrorMessage
								name="lastname"
								component="p"
								className="error-message"
							/>
						</fieldset>
						<fieldset className="input-group">
							<label htmlFor="email">Email</label>
							<Field type="text" id="email" name="email" required />
							<ErrorMessage
								name="email"
								component="p"
								className="error-message"
							/>
						</fieldset>
						<fieldset className="input-group">
							<label htmlFor="password">Password</label>
							<Field type="password" id="password" name="password" required />
							<ErrorMessage
								name="password"
								component="p"
								className="error-message"
							/>
						</fieldset>
						<fieldset className="input-group">
							<label htmlFor="confirm">Confirm Password</label>
							<Field type="password" id="confirm" name="confirm" required />
							<ErrorMessage
								name="confirm"
								className="error-message"
								component="p"
							/>
						</fieldset>
						<div className="forgot">
							<span>Forgot Password ?</span>
						</div>
						<Button buttonText={buttonText.signIn} />
					</Form>
				</Formik>
			</div>
			{modal && <VerifyData values={value} buttonText={buttonText} />}
		</>
	);
};

export default SignIn;
