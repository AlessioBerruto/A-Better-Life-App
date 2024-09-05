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
			<div className="content">
				<h1>Timer di Meditazione</h1>
				<input
					type="number"
					placeholder="Imposta il tempo (minuti)"
					value={inputValue}
					onChange={handleSetTime}
					onKeyDown={preventNegativeInput}
					onInput={(e) =>
						(e.target.value = e.target.value.replace(/[^0-9]/g, ""))
					}
					disabled={isActive}
					min="0"
				/>
				<div>
					<button
						onClick={() => dispatch(startTimer())}
						disabled={isActive || time === 0}
					>
						Avvia
					</button>
					<button onClick={() => dispatch(stopTimer())} disabled={!isActive}>
						Ferma
					</button>
					<button onClick={handleReset}>Reset</button>
				</div>
				<div>
					<h2>{`${Math.floor(time / 60)}:${("0" + (time % 60)).slice(-2)}`}</h2>
				</div>
			</div>
		</>
	);
};

export default Timer;
