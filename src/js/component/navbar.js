import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
export const Navbar = () => {
	return (
		<div>
			<header>
				{/*- Navbar -*/}
				<nav className="navbar navbar-expand-lg">
					<div className="container">
						<a className="navbar-brand text-white" href="#">
							<i className="fas fa-camera-retro" />
							Juan H. Photography
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#nvbCollapse"
							aria-controls="nvbCollapse">
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse" id="nvbCollapse">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item pl-1">
									<a className="nav-link" href="/">
										<i className="fa fa-home fa-fw mr-1" />
										Home
									</a>
								</li>
								<li className="nav-item active pl-1">
									<a className="nav-link" href="#">
										<i className="fa fa-th-list fa-fw mr-1" />
										Blog
									</a>
								</li>
								<li className="nav-item pl-1">
									<a className="nav-link" href="/gallery">
										<i className="fa fa-info-circle fa-fw mr-1" />
										Gallery
									</a>
								</li>
								{/* <li className="nav-item pl-1">
									<a className="nav-link" href="/contact">
										<i className="fa fa-phone fa-fw fa-rotate-180 mr-1" />
										Contact
									</a>
								</li> */}
								<li className="nav-item pl-1">
									<a className="nav-link" href="/demo">
										<i className="fa fa-user-plus fa-fw mr-1" />
										About me
									</a>
								</li>
								<li className="nav-item pl-1">
									<a className="nav-link" href="#">
										<i className="fa fa-sign-in fa-fw mr-1" />
										Other links
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				{/*# Navbar #*/}
			</header>
			{/*- Footer -*/}
		</div>
	);
};
