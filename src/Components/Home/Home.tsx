import "./Home.css";
import photoHome from "../../Assets/img/photoHome.jpg";

import Navigation from "../Layout/Navigation/Navigation";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const presentationText: string = "Bonjour, je suis Jean-Vivien Sicot développeur Full-stack depuis 2017. J'ai les connaissances et la patience nécessaires pour permettre à vos projets de prendre vie.";

const Home = () => {
	const [textWrited, setTextWrited] = useState("");
	const [textWriteIndex, setTextWriteIndex] = useState(0);

	useEffect(() => {
		let timer = setInterval(() => {
			setTextWrited(() => {
				setTextWriteIndex(() => textWriteIndex + 1);
				if (textWriteIndex < presentationText.length) {
					return textWrited + presentationText[textWriteIndex]
				}
				return textWrited;
			});
		}, 100);

		return () => clearInterval(timer);

	}, [textWriteIndex]);

	const handleClickFinishedWrite = useCallback(() => {
		setTextWriteIndex(presentationText.length);
		setTextWrited(presentationText);

	}, [])

	return (
		<>
			<div className="home-size">
				<div className="home-card-size"><img src={photoHome} className="img-fluid home-card-size" alt="" /></div>
				<div className="home-card-size d-flex justify-content-center align-items-center"
					onClick={handleClickFinishedWrite}
				>
					<div className="w-75">
						<div className=" h-25 bg-white text-rigth text-dark border border-4 rounded p-3">
							<p>{textWrited}</p>
						</div>
						<div className="d-flex justify-content-center">
							{
								textWriteIndex > presentationText.length &&

								<button className="btn btn-outline-light mt-4">
									<Link to="/about" className="nav-link  ">Entrer</Link>
								</button>
							}
						</div>
					</div>
				</div>
			</div>
			<Navigation />
		</>
	)
}

export default Home;