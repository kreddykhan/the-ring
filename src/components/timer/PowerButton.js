import React, { useState, useEffect } from 'react';

const PowerButton = params => {

    const [checked, setChecked] = useState(false)

    const[width, setWidth] = useState(window.innerWidth);
    
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
            params.setPowerOn(true);
        }
        setChecked(!checked)
    }
    
    return (
        <div class="control-flex-box">
            POWER
            <div class="slider-flex-box">
                ON&nbsp;
                <label class="switch">
                <input onChange={handleClick} checked={checked} type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
                &nbsp;OFF
            </div>
        </div>
    );
}

export default PowerButton;