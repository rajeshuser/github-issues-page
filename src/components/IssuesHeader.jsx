import React from "react";
import IssueStateSVG from "./svgs/IssueStateSVG";
import TickSVG from "./svgs/TickSVG";
import styles from "./IssuesHeader.module.css";

export default function IssuesHeader({ issuesState, setIssuesState }) {
	return (
		<li class={styles.listHeader}>
			<div class={styles.openAndClosedStates}>
				<div class={`${styles.openState} ${issuesState === "open" && styles.issuesState}`}>
					<IssueStateSVG fill={issuesState === "open" ? "white" : "#8b949e"} />
					<span onClick={() => setIssuesState("open")}>100 Open</span>
				</div>
				<div
					class={`${styles.closedState} ${
						issuesState === "closed" && styles.issuesState
					}`}
				>
					<TickSVG fill={issuesState === "closed" ? "white" : "#8b949e"} />
					<span onClick={() => setIssuesState("closed")}>3000 Closed</span>
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
