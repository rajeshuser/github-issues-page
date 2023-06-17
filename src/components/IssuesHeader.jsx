import React from "react";
import styles from "./IssuesHeader.module.css";

export default function IssuesHeader() {
	return (
		<li class={styles.listHeader}>
			<div class={styles.openAndClosedStates}>
				<div class={styles.openState}>
					<svg viewBox="0 0 16 16" version="1.1" width="16" height="16">
						<path fill="white" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
						<path
							fill="white"
							d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
						></path>
					</svg>
					<span>100 Open</span>
				</div>
				<div class={styles.closedState}>
					<svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
						<path
							fill="#8b949e"
							d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
						></path>
					</svg>
					<span>3000 Closed</span>
				</div>
			</div>
			<div class={styles.filters}>
				<span>Author</span>
				<span>Label</span>
				<span>Projects</span>
				<span>Milestones</span>
				<span>Assignee</span>
				<span>Sort</span>
			</div>
		</li>
	);
}
