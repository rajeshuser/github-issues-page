import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
	return (
		<div class={styles.navBar}>
			<div class={styles.header}>
				<div>
					<button>=</button>
					<p class={styles.cat}>G</p>
					<p class={styles.breadcrumb}>chakra-ui / chakra-ui</p>
				</div>
				<div>
					<input type="search" placeholder="Type / to search" />
					<button>+</button>
					<button>R</button>
					<button>P</button>
					<button>N</button>
					<p class={styles.avatar}>A</p>
				</div>
			</div>
			<div class={styles.navigation}>
				<p>Code</p>
				<p>
					Issues <span>100</span>
				</p>
				<p>
					Pull requets <span>30</span>
				</p>
				<p>Discussions</p>
				<p>Actions</p>
				<p>
					Projects <span>1</span>
				</p>
				<p>Wiki</p>
				<p>Security</p>
				<p>Insights</p>
			</div>
		</div>
	);
}
