import React, { useState, useContext, useEffect } from 'react';

const DockContext = React.createContext();

const DockProvider = ({ children }) => {
    const [isRow, setIsRow] = useState(true);
    const [isReversed, setIsReversed] = useState(false);
    const [isPanel1Maximised, setIsPanel1Maximised] = useState(false);
    const [isPanel2Maximised, setIsPanel2Maximised] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState({});

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

    const switchPanels = () => {
        if (isPanel1Maximised) {
            setIsPanel1Maximised(false);
            setIsPanel2Maximised(true);
        } else if (isPanel2Maximised) {
            setIsPanel1Maximised(true);
            setIsPanel2Maximised(false);
        }
    };

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowDimensions.width <= 768) {
            if (!isPanel1Maximised && !isPanel2Maximised) {
                setIsPanel1Maximised(true);
            }
        }
    }, [windowDimensions]);

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
                windowDimensions,
                switchPanels,
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
