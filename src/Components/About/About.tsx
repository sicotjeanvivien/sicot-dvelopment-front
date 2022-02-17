import Navigation from "../Layout/Navigation/Navigation";
import "./About.css";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

const contentsTest = [
	{
		establisment: "LaPiscine",
		logo: "lapisine",
		description: `Formation style "bootcamp" en 3 mois et demi`,
		exam: ""
	},
	{
		establisment: "Opqauast",
		logo: "opquast",
		description: `Formation style "bootcamp" en 3 mois et demi`,
		exam: ""
	}
];
const contentExperience= [{
	enterprise: "",
	description: "",
	techUse : ['JS', "PHP", "SQL"]
},]

const About = () => {
	const experienceRender = contentExperience.map((content, key)=>{
		console.log(content);
		return <Experience key={key} enterprise={content.enterprise} description={content.description} techUse={content.techUse} />
		
	});

	const educationRender = contentsTest.map((content, key) => {
		return <Education 
			key={key}
			establishment={content.establisment}
			logo={content.logo}
			description={content.description}
			exam={content.exam}
		/>
	})

	return (
		<>
			<h1 className="text-uppercase fw-bold text-center custom-about-title">Qui suis-je ?</h1>
			<div className="container">
				<h2 className="text-uppercase fw-bold text-decoration-underline">expèriences : </h2>
				<div className="row">
					{experienceRender}
				</div>
				<h2 className="text-uppercase fw-bold text-decoration-underline">formations : </h2>
				{educationRender}
				<h2 className="text-uppercase fw-bold text-decoration-underline">technologie : </h2>
				<div className="row">
				</div>
			</div>
			<Navigation />
		</>
	)
}
export default About;