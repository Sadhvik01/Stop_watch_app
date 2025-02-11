
import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
          intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);

            }, 10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);


    function Start(){

        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function Stop(){
        setIsRunning(false);

    }
    function Reset(){
        setElapsedTime(0);
        setIsRunning(false);

    }

    function formatTime() {
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${minutes}:${seconds}:${milliseconds}`;
    }
     return(
        <>
    <div className="containor">
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="button-start" onClick={Start}>Start</button>
                <button className="button-stop" onClick={Stop}>Stop</button>
                <button className="button-reset" onClick={Reset}>Reset</button>
            </div>

        </div>
    </div>
      </>  
    );
};
export default Stopwatch;