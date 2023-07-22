import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpSchema } from "../schemas/singUpSchema";
import Button from "./Button";
import SignContext from "../context/signContext";
import { useContext } from "react";

const Update = () => {
	const { setData, setStep, id } = useContext(SignContext);
	const initialValues = {
		name: "",
		lastname: "",
		email: "",
		password: "",
		confirm: "",
	};
	const buttonText = "Update";

	const onUpdate = (id, value) => {
		setData((prevArray) => {
			return prevArray.map((item) => {
				if (item.id === id) {
					return { ...value, id };
				}
				return item;
			});
		});
	};

	const onSubmit = (values) => {
		onUpdate(id, values);
		setStep("home");
	};

	return (
		<div className="form-container">
			<h2 className="title">Update</h2>

			<Formik
				initialValues={initialValues}
				validationSchema={signUpSchema}
				onSubmit={onSubmit}
			>
				<Form className="form" autoComplete="off">
					<fieldset className="input-group LLL">
						<label htmlFor="name">Name</label>
						<Field type="text" id="name" name="name" autoFocus />
						<ErrorMessage name="name" component="p" className="error-message" />
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
					<Button buttonText={buttonText} />
				</Form>
			</Formik>
		</div>
	);
};

export default Update;
