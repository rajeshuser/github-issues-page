import React from "react";

export default function TasksSVG({ tasks }) {
	const { completedTasks, totalTasks } = tasks;

	return (
		<svg width="12" height="12">
			<circle
				stroke="#484f58"
				stroke-width="2"
				fill="transparent"
				cx="50%"
				cy="50%"
				r="5"
			></circle>
			{completedTasks > 0 && (
				<circle
					stroke="#2f81f7"
					stroke-width="2"
					stroke-dasharray="30"
					stroke-dashoffset={30 - (30 * completedTasks) / totalTasks}
					stroke-linecap="round"
					fill="transparent"
					cx="50%"
					cy="50%"
					r="5"
				></circle>
			)}
		</svg>
	);
}
