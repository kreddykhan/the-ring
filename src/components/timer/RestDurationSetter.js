import React, { useState, useEffect } from 'react';

const RestDurationSetter = params => {

    const [checked, setChecked] = useState(false)
    const handleClick = () =>
    {
        if(checked == true)
        {
            params.setRestDuration([0, 30]);
        }
        else
        {
            params.setRestDuration([1, 0]);
        }
        setChecked(!checked)
    }
    
    return (
        <div class="control-flex-box">
              REST
              <div class="slider-flex-box">
                30 SEC&nbsp;
                <label class="switch">
                    <input onChange={handleClick} checked={checked} type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
                &nbsp;1 MIN
            </div>
        </div>
    );
}

export default RestDurationSetter;