import '../style/Timer.css';
import React, { useState } from 'react';
import RoundTimer from '../components/timer/RoundTimer';
import PowerButton from '../components/timer/PowerButton';
import RoundDurationSetter from '../components/timer/RoundDurationSetter';
import RestDurationSetter from '../components/timer/RestDurationSetter';

function Timer() {

  const [roundDuration, setRoundDuration] = useState(2);
  const [[restMinutes, restSeconds], setRestDuration] = useState([0, 30]);

  const[powerOn, setPowerOn] = useState(false);

  const[width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
  })
  
  return (
    <div className="Timer">
        <div class="container">
          <div class="controls-flex-box">
            <PowerButton setPowerOn = {setPowerOn}/>
            <RoundDurationSetter setRoundDuration = {setRoundDuration}/>
            <RestDurationSetter setRestDuration = {setRestDuration}/>
          </div>
          {width > 700 && 
          <div><div id="red" class="circle"></div></div>
          }
          {width > 700 && 
          <div><div id="yellow" class="circle"></div></div>
          }
          {width > 700 && 
          <div><div id="green" class="circle"></div></div>
          }
          {width < 700 && 
          <div><div id="singleBell" class="circle"></div></div>
          }
        </div>

        {powerOn &&
        <RoundTimer roundTime={{roundMinutes: roundDuration}} restTime={{restMinutes: restMinutes, restSeconds:restSeconds+1}}/>
        // <RoundTimer roundTime={{roundMinutes: 0, roundSeconds: 10}} restTime={{restMinutes: restMinutes, restSeconds:10+1}}/>
        }
    </div>
  );
}

export default Timer;