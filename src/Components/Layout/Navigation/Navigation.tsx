import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
	return (
		<>
			<nav className="custom-navbar">
				<div className="">
					<div className="d-flex justify-content-center">
						<Link to="/" className="nav-link link-light custom-navbar-item fs-5">Home</Link>
						<Link to="/about" className="nav-link link-light custom-navbar-item fs-5">About</Link>
						<Link to="/projet" className="nav-link link-light custom-navbar-item fs-5">Projet</Link>
						<Link to="/blog" className="nav-link link-light custom-navbar-item fs-5">Blog</Link>
						<Link to="/Blockchains" className="nav-link link-light custom-navbar-item fs-5">Blockchains</Link>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	)
}

export default Navigation;