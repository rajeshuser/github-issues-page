import React from "react";
import { Route, Routes } from "react-router-dom";
import Issues from "../pages/Issues";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AllRoutes() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Issues />} />
			</Routes>
			<Footer />
		</>
	);
}
