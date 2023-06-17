import React from "react";
import { Route, Routes } from "react-router-dom";
import Issues from "../pages/Issues";

export default function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Issues />} />
		</Routes>
	);
}
