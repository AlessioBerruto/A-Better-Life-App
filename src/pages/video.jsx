import React from "react";
import Navbar from "../components/Navbar";

const Video = () => {
	return (
		<>
            <Navbar />
			<div className="content">
				<iframe					
					src="https://www.youtube.com/embed/fgye3en2mv8"
					title="Meditazione Guidata"					
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</>
	);
};

export default Video;
