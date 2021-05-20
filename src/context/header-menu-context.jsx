import React, { useState, useEffect } from 'react';

export const HeaderMenuContext = React.createContext();

export default function HeaderMenuContextProvider(props) {
    const [open, setOpen] = useState(false);

    return (
        <HeaderMenuContext.Provider value={{ open, setOpen }}>
            {props.children}
        </HeaderMenuContext.Provider>
    );
}
