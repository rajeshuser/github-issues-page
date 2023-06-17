import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import Issue from "../components/Issue";
import Loading from "../components/Loading";
import IssuesHeader from "../components/IssuesHeader";
import { baseURL } from "../contants";
import styles from "./Issues.module.css";

export default function Issues() {
	const [issues, setIssues] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams] = useSearchParams();
	const page = searchParams.get("page");

	useEffect(() => {
		getIssues();

		async function getIssues() {
			try {
				const response = await axios({
					method: "GET",
					baseURL,
					params: {
						page,
						per_page: 10
					}
				});
				setIssues(response.data);
				setIsLoading(false);
			} catch (error) {
				console.log({ error: error.message });
				setIsLoading(false);
			}
		}
	}, [page]);

	return (
		<div>
			<h1 class={styles.heading}>Chakra UI Issues</h1>
			{isLoading ? (
				<Loading />
			) : (
				<ul class={styles.issues}>
					<IssuesHeader />
					{issues.map((issue) => (
						<Issue key={issue.title} {...issue} />
					))}
				</ul>
			)}
			<Pagination page={+page} />
		</div>
	);
}
