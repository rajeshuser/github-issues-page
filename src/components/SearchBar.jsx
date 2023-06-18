import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
	return (
		<div class={styles.searchBar}>
			<div class={styles.filterAndSearch}>
				<span class={styles.center}>Filter</span>
				<input type="search" placeholder="is:issue is:open" />
			</div>
			<div class={styles.labelsAndMilestones}>
				<p class={styles.center}>
					Labels <span>80</span>
				</p>
				<p class={styles.center}>
					Milestones <span>5</span>
				</p>
			</div>
			<button class={styles.newIssueButton}>New issue</button>
		</div>
	);
}
