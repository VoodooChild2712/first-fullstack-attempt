import React from "react";
import styles from "./index.module.css";
import { useState } from "react";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const data = {
		email: email,
		password: password,
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch("http://localhost:5000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(async (data) => {
			const dataFormated = await data.json();
			if (dataFormated) {
				localStorage.setItem("token", dataFormated.data.token);
				window.location.href = "/";
			}
			console.log(dataFormated);
		});
	};

	return (
		<main className={styles.mainForm}>
			<form className={styles.formRegister} onSubmit={(e) => handleSubmit(e)}>
				<h2 className={styles.formTitle}>LogIn!</h2>
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
				<input type="submit" value="LogIn" className={styles.buttonRegister} />
			</form>
		</main>
	);
};

export default LoginPage;
