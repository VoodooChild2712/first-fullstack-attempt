import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const Home = () => {
	const [dataState, setDataState] = useState([]);

	const fetchData = async () => {
		await fetch("http://localhost:5000/music", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then(async (data) => {
			const formatedData = await data.json();
			setDataState(formatedData);
			console.log(formatedData);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (!localStorage.getItem("token")) {
		window.location.href = "/login";
	}

	return (
		<main className={styles.mainContainer}>
			<div className={styles.musicContainer}>
				{dataState.map((item) => (
					<li className={styles.listItem} key={item.id}>
						<div style={{ display: "flex", gap: "15px" }}>
							<div className={styles.coverImg}>
								<img style={{ width: "100%" }} src={item.img} alt="Portada" />
							</div>
							<div>
								<h3>{item.name}</h3>
								<p>{item.description}</p>
							</div>
						</div>
						<div>
							<p>{item.author}</p>
						</div>
					</li>
				))}
			</div>
		</main>
	);
};

export default Home;
