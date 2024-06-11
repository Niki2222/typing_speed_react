import React, { useEffect } from "react";

export default function Timer({ timer, setTimer, isTimerStarted }) {
    const minute = 1000;
    useEffect(() => {
        let interval;
        if (isTimerStarted) {
            interval = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    }
                    clearInterval(interval);
                    return 0;
                });
            }, minute);
        }
        return () => clearInterval(interval);
    }, [isTimerStarted]);

    return (<h2>Timer: {timer} seconds</h2>);
}
