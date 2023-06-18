import React from "react";
import GitHubSVG from "./svgs/GitHubSVG";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<div class={styles.footer}>
			<div>
				<a href="#">Terms</a>
				<a href="#">Privacy</a>
				<a href="#">Security</a>
				<a href="#">Status</a>
				<a href="#">Docs</a>
				<a href="#">Contact GitHub</a>
				<a href="#">Pricing</a>
				<a href="#">API</a>
				<a href="#">Training</a>
				<a href="#">Blog</a>
				<a href="#">About</a>
			</div>
			<div>
				<GitHubSVG /> © 2023 GitHub, Inc.
			</div>
		</div>
	);
}
