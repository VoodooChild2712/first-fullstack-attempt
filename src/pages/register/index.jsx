import React from "react";
import styles from "./index.module.css";
import { useState } from "react";
import { Navigate } from "react-router";

const RegisterPage = () => {
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const data = {
		name: name,
		lastname: lastname,
		username: userName,
		email: email,
		password: password,
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const request = await fetch("http://localhost:5000/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((data) => {
			console.log(data);
            window.location.href = '/login'
		});
	};

	return (
		<main className={styles.mainForm}>
			<form className={styles.formRegister} onSubmit={(e) => handleSubmit(e)}>
				<h2 className={styles.formTitle}>Register!</h2>
				<input
					className={styles.inputRegister}
					type="text"
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className={styles.inputRegister}
					type="text"
					placeholder="Last Name"
					onChange={(e) => setLastname(e.target.value)}
				/>
				<input
					className={styles.inputRegister}
					type="text"
					placeholder="User Name"
					onChange={(e) => setUserName(e.target.value)}
				/>
				<input
					className={styles.inputRegister}
					type="text"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className={styles.inputRegister}
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="submit"
					value="Register"
					className={styles.buttonRegister}
				/>
				<label className={styles.loginLabel}>Do you have an account already?</label>
				<a className={styles.loginButton} href="/login">Login</a>
			</form>
		</main>
	);
};

export default RegisterPage;
