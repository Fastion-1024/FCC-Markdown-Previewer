import React, { useState, useContext } from 'react';

const DockContext = React.createContext();

const DockProvider = ({ children }) => {
    const [isRow, setIsRow] = useState(true);
    const [isReversed, setIsReversed] = useState(false);
    const [isPanel1Maximised, setIsPanel1Maximised] = useState(false);
    const [isPanel2Maximised, setIsPanel2Maximised] = useState(false);

    const togglePanel1ExpandCollapse = () => {
        // Only one panel may be expanded at a time.
        setIsPanel1Maximised(!isPanel1Maximised);
        isPanel1Maximised && setIsPanel2Maximised(false);
    };

    const togglePanel2ExpandCollapse = () => {
        // Only one panel may be expanded at a time.
        setIsPanel2Maximised(!isPanel2Maximised);
        isPanel2Maximised && setIsPanel1Maximised(false);
    };

    return (
        <DockContext.Provider
            value={{
                isRow,
                isReversed,
                setIsRow,
                setIsReversed,
                isPanel1Maximised,
                isPanel2Maximised,
                togglePanel1ExpandCollapse,
                togglePanel2ExpandCollapse,
            }}
        >
            {children}
        </DockContext.Provider>
    );
};

export const useDockContext = () => {
    return useContext(DockContext);
};

export { DockContext, DockProvider };
