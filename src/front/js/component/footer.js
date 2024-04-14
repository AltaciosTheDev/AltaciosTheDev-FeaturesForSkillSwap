import React, { Component } from "react";
import { Link, useLocation} from "react-router-dom";

export const Footer = () => {
	const location = useLocation()
    const excludePaths = ["/private"]
    const shouldExcludeFooter = excludePaths.includes(location.pathname)

    if (shouldExcludeFooter) {
        return null; // Don't render anything if the current path is included in excludePaths
    }
	

	return(
		<footer className="footer mt-auto py-3 text-center">
			<p>
				Made with <i className="fa fa-heart text-danger" /> by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
			</p>
		</footer>
	)
}
