import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setTime,
	startTimer,
	stopTimer,
	decrementTime,
	resetTimer,
} from "../redux/timerSlice";
import Navbar from "../components/Navbar";
import PlantImg from "../assets/plant.jpg";

const Timer = () => {
	const [inputValue, setInputValue] = useState("");
	const time = useSelector((state) => state.timer.time);
	const isActive = useSelector((state) => state.timer.isActive);
	const dispatch = useDispatch();

	useEffect(() => {
		let interval = null;
		if (isActive && time > 0) {
			interval = setInterval(() => {
				dispatch(decrementTime());
			}, 1000);
		} else if (!isActive && time !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, time, dispatch]);

	const handleSetTime = (e) => {
		let minutes = Number(e.target.value);
		if (minutes < 0) {
			minutes = 0;
		}
		setInputValue(e.target.value);
		dispatch(setTime(minutes * 60));
	};

	const preventNegativeInput = (e) => {
		if (e.key === "-" || e.key === "e") {
			e.preventDefault();
		}
	};
	

	const handleReset = () => {
		setInputValue("");
		dispatch(resetTimer());
	};

	return (
		<>
			<Navbar />
			<div className="timer-page">
				<div className="timer-img-container">
					<img className="timer-img" src={PlantImg} alt="plant-image" />
				</div>

				<div className="timer-container">
					<p>
						Utilizza il timer per impostare il tempo di meditazione che
						preferisci, <br /> poi concentrati sul tuo respiro e sui tuoi
						pensieri.
					</p>
					<input
						className="input-field"
						type="number"
						placeholder="Imposta il tempo (minuti)"
						value={inputValue}
						onChange={handleSetTime}
						onKeyDown={preventNegativeInput}
						onInput={(e) => {
							let value = e.target.value.replace(/[^0-9]/g, ""); 
							if (value.length > 3) { 
								value = value.slice(0, 3); 
							}
							e.target.value = value;
							setInputValue(value);
						}}
						disabled={isActive}
						min="0"
					/>
					<div className="timer-btn-container">
						<button
							className="timer-btn"
							onClick={() => dispatch(startTimer())}
							disabled={isActive || time === 0}
						>
							Start
						</button>
						<button
							className="timer-btn"
							onClick={() => dispatch(stopTimer())}
							disabled={!isActive}
						>
							Pausa
						</button>
						<button className="timer-btn" onClick={handleReset}>
							Reset
						</button>
					</div>
					<div>
						<h2>{`${Math.floor(time / 60)}:${("0" + (time % 60)).slice(
							-2
						)}`}</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Timer;
