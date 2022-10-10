import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import longBell from './LongBell.m4a';
import shortBell from './ShortBell.m4a';

const RoundTimer = ({roundTime, restTime}) => {
    const [startBellPlayed, setStartBellPlayed] = useState(false)
    const [warningBellPlayed, setWarningBellPlayed] = useState(false)
    const [endBellPlayed, setEndBellPlayed] = useState(false)
    const [playLongBell] = useSound(longBell);
    const [playShortBell] = useSound(shortBell);
   
    const { roundMinutes = 0, roundSeconds = 0 } = roundTime;
    const [[roundMins, roundSecs], setRoundTime] = React.useState([roundMinutes, roundSeconds]);

    const { restMinutes = 0, restSeconds = 0 } = restTime;
    const [[restMins, restSecs], setRestTime] = React.useState([restMinutes, restSeconds]);

    const [[mins, secs], setTime] = React.useState([roundMinutes, roundSeconds]);

    const[width, setWidth] = useState(window.innerWidth);
    
    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        }
    
        window.addEventListener('resize', handleResize)
    })

    const tick = () => {
        if(!startBellPlayed)
        {
            playLongBell()
            setStartBellPlayed(true);
        }
        if(roundMins == 0 && roundSecs <= 30)
        {
            if(!warningBellPlayed)
            {
                playShortBell()
                setWarningBellPlayed(true);
            }

            if(width > 700)
            {
                document.getElementById("red").style.backgroundColor = "#FFFFFF";
                document.getElementById("green").style.backgroundColor = "#FFFFFF";
              
                document.getElementById("yellow").style.backgroundColor = "#F4D03F";
            }
            else
            {
                document.getElementById("singleBell").style.backgroundColor = "#F4D03F";
            }
        }
        else {
            if(width > 700)
            {
                document.getElementById("red").style.backgroundColor = "#FFFFFF";
                document.getElementById("yellow").style.backgroundColor = "#FFFFFF";
            
                document.getElementById("green").style.backgroundColor = "#058d3b";
            }
            else
            {
                document.getElementById("singleBell").style.backgroundColor = "#058d3b";
            }
        }
      
      
        if (roundMins === 0 && roundSecs === 1) {
            setTime([restMins, restSecs])
            tock();
        } else if (roundSecs === 0) {
            setRoundTime([roundMins - 1, 59]);
            setTime([roundMins - 1, 59]);
        } else {
            setRoundTime([roundMins, roundSecs - 1]);
            setTime([roundMins, roundSecs - 1]);
        }
    };

    const tock = () => {
        if(!endBellPlayed)
        {
            playLongBell()
            setEndBellPlayed(true);
        }

        if(width > 700)
        {
            document.getElementById("yellow").style.backgroundColor = "#FFFFFF";
            document.getElementById("green").style.backgroundColor = "#FFFFFF";
        
            document.getElementById("red").style.backgroundColor = "#cf2819";
        }
        else
        {
            document.getElementById("singleBell").style.backgroundColor = "#cf2819";
        }

        if (restMins === 0 && restSecs === 1) {
            reset()
        } else if (restSecs === 0) {
            setRestTime([restMins - 1, 59]);
            setTime([restMins - 1, 59]);
        } else {
            setRestTime([restMins, restSecs - 1]);
            setTime([restMins, restSecs - 1]);
        }
    };

    const reset = () => {
        setStartBellPlayed(false);
        setWarningBellPlayed(false);
        setEndBellPlayed(false);
        setRoundTime([parseInt(roundMinutes), parseInt(roundSeconds)]);
        setRestTime([parseInt(restMinutes), parseInt(restSeconds)]);
        setTime([parseInt(roundMinutes), parseInt(roundSeconds)]);
    }

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div>
            {/* <p>{`${roundMins.toString().padStart(2, '0')}:${roundSecs.toString().padStart(2, '0')}`}</p> */}
            {/* <p>{`${restMins.toString().padStart(2, '0')}:${restSecs.toString().padStart(2, '0')}`}</p> */}
            <div class="timer-text">{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</div>
        </div>
    );
}

export default RoundTimer;