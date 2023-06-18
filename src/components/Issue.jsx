import React from "react";
import TasksSVG from "./svgs/TasksSVG";
import IssueStateSVG from "./svgs/IssueStateSVG";
import PullSVG from "./svgs/PullSVG";
import CommentSVG from "./svgs/CommentSVG";
import TodoSVG from "./svgs/TodoSVG";
import markCode from "../utils/markCode";
import getTasks from "../utils/getTasks";
import styles from "./Issue.module.css";

export default function Issue({
	html_url,
	number,
	title,
	body,
	user,
	comments,
	labels,
	state,
	created_at
}) {
	const date = created_at.substring(0, 10);
	const time = created_at.substring(11, 19);
	const tasks = getTasks(body);

	return (
		<li class={styles.issue}>
			{/* state icon */}
			<div class={styles.openStateIcon}>
				<IssueStateSVG fill={state === "open" ? "#3fb950" : "white"} />
			</div>

			{/* issue short description */}
			<div class={styles.issueTitleAndStats}>
				<div>
					<a href={html_url} class={styles.issueTitle}>
						{markCode(title)}
					</a>
					{labels.map((label) => (
						<a
							href={label.url}
							class={styles.issueLabel}
							style={{ color: `#${label.color}` }}
						>
							{label.name}
						</a>
					))}
				</div>
				<div class={styles.issueStats}>
					<span>
						#{number} opened on {date} at {time} by &nbsp;
						<a href={user.html_url} class={styles.user}>
							{user.login}
						</a>
						&nbsp;
					</span>
					<span>
						{tasks.completedTasks === 0 ? (
							<>
								<TodoSVG />
								&nbsp;
								{tasks.totalTasks} tasks
							</>
						) : (
							<>
								<span
									style={{
										transform: "rotate(-90deg)",
										width: "12px",
										height: "12px",
										display: "inline-flex"
									}}
								>
									<TasksSVG tasks={tasks} />
								</span>
								&nbsp;
								{tasks.completedTasks} of {tasks.totalTasks} tasks
							</>
						)}
					</span>
				</div>
			</div>

			{/* pull requests and comments count */}
			<div class={styles.prsAndComments}>
				<span>
					<PullSVG fill="#6e7681" />
				</span>
				<span class={styles.iconAndCount}></span>
				<span class={styles.iconAndCount}>
					{comments > 0 && (
						<>
							<CommentSVG fill="#6e7681" />
							<span>{comments}</span>
						</>
					)}
				</span>
			</div>
		</li>
	);
}
