import { Link } from "react-router-dom";
import './Navbar.css';
import houseIcon from '../assets/house-icon.svg';
import timerIcon from '../assets/timer-icon.svg';
import videoIcon from '../assets/video-icon.svg';
import abIcon from '../assets/AB-icon.png';

function Navbar() {
	return (
		<div className="Navbar">
			<ul>
				<li>
					<Link to="/" className="navbar-link">
						<img
							src={houseIcon}
							alt="home-icon"
							className="navbar-icon"
						/>
						Home
					</Link>
				</li>
				<li>
					<Link to="/timer" className="navbar-link">
						<img
							src={timerIcon}
							alt="timer-icon"
							className="navbar-icon"
						/>
						Timer per meditare
					</Link>
				</li>
				<li>
					<Link to="/video" className="navbar-link">
						<img
							src={videoIcon}
							alt="video-icon"
							className="navbar-icon"
						/>
						Meditazione Guidata
					</Link>
				</li>
			</ul>
			<div className="brand-container">
				<img src={abIcon} alt="AB-icon" />
				<p>AB Development</p>
			</div>
		</div>
	);
}

export default Navbar;
