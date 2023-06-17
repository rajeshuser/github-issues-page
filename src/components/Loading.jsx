import React from "react";
import styles from "./Loading.module.css";

export default function Loading() {
	return (
		<div class={styles.loading}>
			<p>Loading...</p>
			<div class={styles.spinner}></div>
		</div>
	);
}
