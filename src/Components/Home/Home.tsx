import "./Home.css";
import photoHome from "../../Assets/photoHome.jpg";

import Navigation from "../Layout/Navigation/Navigation";
import { useCallback, useEffect, useState } from "react";

const presentationText: string = "Bonjour, je suis Jean-Vivien Sicot développeur Full-stack depuis 2017. J'ai les connaissances et la patience nécessaires pour permettre à vos projets de prendre vie.";

const Home = () => {
	const [textWrited, setTextWrited] = useState("");
	const [textWriteIndex, setTextWriteIndex] = useState(0);
	const [textLength, setTextLength] = useState(presentationText.length);

	useEffect(() => {
		let timer = setInterval(() => {
			setTextWrited(() => {
				if (textWriteIndex < textLength) {
					setTextWriteIndex(() => textWriteIndex + 1);
					return textWrited + presentationText[textWriteIndex]
				}
				return textWrited;
			});
		}, 100);
		return () => clearInterval(timer);

	}, [textWriteIndex]);

	const handleClickFinishedWrite = useCallback(() => {
		setTextWriteIndex(textLength);
		setTextWrited(presentationText);

	},[])

	return (
		<>
			<div className="d-flex homeCustom">
				<div className="w-50 "><img src={photoHome} className="img-fluid w-100" alt="" /></div>
				<div className="w-50 d-flex justify-content-center align-items-center" onClick={handleClickFinishedWrite}>
					<div className=" w-75 h-25 bg-white text-rigth text-dark border border-4 rounded p-3">
						<p>{textWrited}</p>
					</div>
				</div>
			</div>
			<Navigation />
		</>
	)
}

export default Home;