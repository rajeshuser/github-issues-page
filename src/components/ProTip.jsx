import React from "react";
import BulbSVG from "../components/svgs/BulbSVG";

export default function ProTip() {
	return (
		<p style={{ color: "#6e7681", "font-size": "small" }}>
			<BulbSVG fill="#6e7681" />{" "}
			<span style={{ color: "white", "font-weight": "bold" }}>ProTip!</span> Mix and match
			filters to narrow down what you’re looking for.
		</p>
	);
}
