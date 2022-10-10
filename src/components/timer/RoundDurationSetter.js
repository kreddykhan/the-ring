import React, { useState, useEffect } from 'react';

const RoundDurationSetter = params => {

    const [checked, setChecked] = useState(false)
    const handleClick = () =>
    {
        if(checked == true)
        {
            params.setRoundDuration(2);
        }
        else
        {
            params.setRoundDuration(3);
        }
        setChecked(!checked)
    }
    
    return (
        <div class="control-flex-box">
              ROUND
              <div class="slider-flex-box">
                2 MIN&nbsp;
                <label class="switch">
                    <input onChange={handleClick} checked={checked} type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
                &nbsp;3 MIN
            </div>
        </div>
    );
}

export default RoundDurationSetter;