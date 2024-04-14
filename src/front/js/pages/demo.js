import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {Sidebar} from "../component/sidebar"

import { Context } from "../store/appContext";
import "../../styles/private.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="dashboard">
				<Sidebar/>
				<header className="header"></header>
				<main className="main">
					<div className="tutor">Tutor</div>
					<div className="news">News</div>
					<div className="upcomming">Upcoming</div>
					<div className="toAccept">toAccept</div>
					<div className="stats">Achievements</div>
				</main>
			</div>








			{/* <Link to="/">	
				<span className="nav-link" aria-current="page">Home</span>
			</Link> */}
		</>


	)
}