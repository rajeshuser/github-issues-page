import React from "react";
import markCode from "../utils/markCode";
import styles from "./Issue.module.css";

export default function Issue({ html_url, number, title, user, comments, labels, created_at }) {
	const date = created_at.substring(0, 10);
	const time = created_at.substring(11, 19);

	return (
		<li class={styles.issue}>
			{/* state icon */}
			<div class={styles.openStateIcon}>
				<svg viewBox="0 0 16 16" version="1.1" width="16" height="16">
					<path fill="#3fb950" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
					<path
						fill="#3fb950"
						d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
					></path>
				</svg>
			</div>

			{/* issue short description */}
			<div class={styles.issueTitleAndStats}>
				<div>
					<a href={html_url} class={styles.issueTitle}>
						{markCode(title)}
					</a>
					{labels.map((label) => (
						<a href={label.url} class={styles.issueLabel}>
							{label.name}
						</a>
					))}
				</div>
				<div class={styles.issueStats}>
					#{number} opened on {date} at {time} by{" "}
					<a href={user.html_url} class={styles.user}>
						{user.login}
					</a>
				</div>
			</div>

			{/* pull requests and comments count */}
			<div class={styles.prsAndComments}>
				<span class={styles.iconAndCount}>
					<svg
						height="16"
						viewBox="0 0 16 16"
						version="1.1"
						width="16"
						class={styles.pullIcon}
					>
						<path
							fill="#6e7681"
							d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
						></path>
					</svg>
				</span>
				<span class={styles.iconAndCount}></span>
				<span class={styles.iconAndCount}>
					{comments > 0 && (
						<>
							<svg
								height="16"
								viewBox="0 0 16 16"
								version="1.1"
								width="16"
								class={styles.commentIcon}
							>
								<path
									fill="#6e7681"
									d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
								></path>
							</svg>
							<span>{comments}</span>
						</>
					)}
				</span>
			</div>
		</li>
	);
}
