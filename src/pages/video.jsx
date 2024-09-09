import React from "react";
import Navbar from "../components/Navbar";

const Video = () => {
	return (
		<>
			<Navbar />
			<div className="video-page">
				<div className="video-content">
					<p>
						"La meditazione guidata è una tecnica meditativa attraverso la quale
						uno o più partecipanti meditano sotto la guida fornita da un
						professionista o un insegnante, di persona o tramite un testo
						scritto, una registrazione sonora, un video o un mezzo audiovisivo
						<br /> comprendente musica o istruzioni verbali o una combinazione di
						entrambi."
					</p>
					<p>
						Si è rilevata particolarmente efficace come mezzo per ridurre i
						livelli di stress, minimizzare la frequenza, <br /> la durata e l'intensità
						degli episodi asmatici, controllare e gestire il dolore.
					</p>
				</div>

				<div className="video-container">
					<iframe
						src="https://www.youtube.com/embed/fgye3en2mv8"
						title="Meditazione Guidata"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</>
	);
};

export default Video;
