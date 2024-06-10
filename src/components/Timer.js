import React, { useEffect } from "react";

export default function Timer({ timer, setTimer, isTimerStarted }) {

    useEffect(() => {
        let interval;
        if (isTimerStarted) {
            interval = setInterval(() => {
                setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(interval);
                    return 0;
                }});
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerStarted]);

    return (<h2>Timer: {timer} seconds</h2>);
}
