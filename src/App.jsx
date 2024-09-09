import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import BowlsImg from "../src/assets/bowls.jpg";
import MindfulnessImg from "../src/assets/mindfulness.jpg";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="home-page">
				<div className="home-content">
					<h1>A BETTER LIFE</h1>
					<p>
						"La meditazione è una pratica che consiste nel focalizzare
						l'attenzione e portare la mente a uno stato di calma e
						consapevolezza. <br />
						Praticare la meditazione può aiutare a ridurre lo stress, migliorare
						la concentrazione, aumentare il senso di calma interiore e la
						consapevolezza di sé. <br /> Inoltre, può contribuire a migliorare
						il sonno, abbassare la pressione sanguigna e sviluppare una maggiore
						resilienza emotiva"
					</p>
					<p>
						<strong>A Better Life</strong> è un'app che intende aiutare chiunque
						voglia migliorare la propria vita attraverso la meditazione. <br />
						Grazie al timer per la meditazione potrai impostare quanti minuti
						intendi meditare per conto tuo, <br /> oppure potrai affidarti alla
						nostra meditazione guidata per un'esperienza con un coach di
						respirazione.
					</p>
				</div>
				<div className="home-img-container">
					<img className="home-img" src={BowlsImg} alt="Bowls image" />
					<img
						className="home-img"
						src={MindfulnessImg}
						alt="Mindfulness image"
					/>
				</div>
			</div>
		</>
	);
};

export default App;
