import React, { useState, useEffect } from 'react';

function UseWindowSize() {
    const [windowState, setWindowState] = useState({
        width: undefined,
        height: undefined
    });
    useEffect(() => {
        function handleSize() {
            setWindowState({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }
        window.addEventListener('resize', handleSize);
        handleSize();
        return () => window.addEventListener('resize', handleSize);
    }, []);
    return windowState;
}

export default UseWindowSize;
