import React, { useState } from 'react';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [newTime, setTime] = useState(time);

    const updateTime = () => {
        time= new Date().toLocaleTimeString();
        setTime(time);
    }

    setInterval(updateTime,1000);
    return (
        <>{newTime}</>
    );
} 

export default Clock;