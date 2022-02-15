import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link ">About</Link>
						</li>
						<li className="nav-item">
							<Link to="/projet" className="nav-link ">Projet</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link ">Blog</Link>
						</li>
						<li className="nav-item">
							<Link to="/Blockchains" className="nav-link ">Blockchains</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Outlet />
		</>
	)
}

export default Navigation;