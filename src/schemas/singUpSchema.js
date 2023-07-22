import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
	name: Yup.string()
		.min(4, "Name must be 4 character at least")
		.required("Full name is required"),
	lastname: Yup.string()
		.min(4, "Last name must be 4 character at least")
		.required("Last name is required"),
	email: Yup.string()
		.email("Enter a valid email")
		.required("Email is required"),
	password: Yup.string()
		.min(2, "Password must be at least 8 characters")
		.matches(
			/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
			"Password should has lower, upper, nums"
		)
		.required("Password is required"),
	confirm: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Confirmation required"),
});
