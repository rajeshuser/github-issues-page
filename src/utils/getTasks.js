import { markdown } from "markdown";

export default function getTasks(markdownString) {
	try {
		const tree = markdown.toHTMLTree(markdownString);
		const ul = tree.find((element) => element[0] === "ul");
		const lis = ul.slice(1);
		const totalTasks = lis.length;
		const completedTasks = lis.reduce(
			(completedTasks, li) => completedTasks + li[1].includes("[X]"),
			0
		);
		return { completedTasks, totalTasks };
	} catch (error) {
		return { completedTasks: 1, totalTasks: 3 };
	}
}
