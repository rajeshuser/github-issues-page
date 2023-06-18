import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Pagination.module.css";

export default function Pagination({ page = 1, totalPages = 100, issuesState = "open" }) {
	const { pathname } = useLocation();

	page = page <= 0 ? 1 : page;

	const buttonsLimit = 5;
	const remainder = page % buttonsLimit === 0 ? buttonsLimit : page % buttonsLimit;
	const firstButton = Math.max(1, page - remainder + 1);
	const lastButton = Math.min(totalPages, firstButton + buttonsLimit - 1);

	const handleClick = (event) => {
		if (
			(event.target.id === "previous" && page === 1) ||
			(event.target.id === "next" && page === totalPages)
		) {
			event.preventDefault();
		}
	};

	const buttons = [];
	for (let button = firstButton; button <= lastButton; button++) {
		buttons.push(
			<a
				key={button}
				href={`${pathname}?page=${button}&state=${issuesState}`}
				class={`${styles.pageButton} ${page === button && styles.activeButton}`}
				onClick={handleClick}
			>
				{button}
			</a>
		);
	}

	return (
		<div class={styles.pagination}>
			<a
				id="previous"
				href={`${pathname}?page=${page - 1}&state=${issuesState}`}
				class={`${styles.pageButton} ${styles.previousNext} ${
					page === 1 && styles.previousNextDisabled
				}`}
				onClick={handleClick}
			>
				&lt; Previous
			</a>
			{buttons}
			<a
				id="next"
				href={`${pathname}?page=${page + 1}&state=${issuesState}`}
				class={`${styles.pageButton} ${styles.previousNext} ${
					page === totalPages && styles.previousNextDisabled
				}`}
				onClick={handleClick}
			>
				Next &gt;
			</a>
		</div>
	);
}
