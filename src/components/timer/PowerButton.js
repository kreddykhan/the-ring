import React, { useState, useEffect } from 'react';
import NoSleep from 'nosleep.js';

const PowerButton = params => {

    const [checked, setChecked] = useState(false)

    const[width, setWidth] = useState(window.innerWidth);

    var noSleep = new NoSleep();
    
    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        }
    
        window.addEventListener('resize', handleResize)
    })
    
    const handleClick = () =>
    {
        if(checked == true)
        {
            noSleep.disable();
            params.setPowerOn(false);

            if(width > 700)
            {
                document.getElementById("red").style.backgroundColor = "#FFFFFF";
                document.getElementById("yellow").style.backgroundColor = "#FFFFFF";
                document.getElementById("green").style.backgroundColor = "#FFFFFF";
            }
            else
            {
                document.getElementById("singleBell").style.backgroundColor = "#FFFFFF";
            }
        }
        else
        {
            noSleep.enable();
            params.setPowerOn(true);
        }
        setChecked(!checked)
    }
    
    return (
        <div class="control-flex-box">
            POWER
            <div class="slider-flex-box">
                OFF&nbsp;
                <label class="switch">
                <input onChange={handleClick} checked={checked} type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
                &nbsp;ON
            </div>
        </div>
    );
}

export default PowerButton;