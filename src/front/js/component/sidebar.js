import React, {useState} from "react"
import { Link, useLocation} from "react-router-dom";
import personLogo from "../../img/personLogo.png"
import "../../styles/sidebar.css";

export const Sidebar = () => {

    return(
            <nav className="sidebar">
                <div className="sidebar-logo">
                    <div className="sidebar-link">
                        <i className="bx bx-git-compare"></i>
                        <span>SkillSwap</span>
                    </div>
                    
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="bx bxs-dashboard"></i>
                            <span>Dashboard</span>    
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="bx bx-search-alt"></i>
                            <span>Learn Skill</span>    
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="bx bxs-bookmark-star"></i>
                            <span>Favorites</span>    
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="bx bx-history"></i>
                            <span>History</span>    
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="bx bx-user"></i>
                            <span>Profile</span>    
                        </a>
                    </li> 

                </ul>
                <ul className="sidebar-list logout">
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="bx bx-log-out"></i>
                            <span>Logout</span>    
                        </a>
                    </li>
                </ul>

            </nav>
    )
}