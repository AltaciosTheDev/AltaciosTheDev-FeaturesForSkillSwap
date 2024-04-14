import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import Header from "../component/header";
import Sidebar from "../component/sidebar";
import Main from "../component/main";


import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	const [openSidebar, setOpenSidebar] = useState(false)

	const openSidebarToggle = () => {
		setOpenSidebar(!openSidebar)
	}

	return (
		<div className="dashboard">
			<div className="grid-container">
				<Header openSidebarToggle={openSidebarToggle}/>
				<Sidebar openSidebar={openSidebar} openSidebarToggle={openSidebarToggle}/>
				<Main/>
			</div>
		</div>
		
	);
};
