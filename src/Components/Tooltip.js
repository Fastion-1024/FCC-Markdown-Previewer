import React, { useState, useEffect } from 'react';
import '../Styles/tooltip.css';

const Tooltip = (props) => {
    let toolTipDelay;
    const { content, delay, position, children } = props;
    const [isActive, setIsActive] = useState(false);

    const showTooltip = () => {
        toolTipDelay = setTimeout(() => {
            setIsActive(true);
        }, delay || 500);
    };

    const hideTooltip = () => {
        clearTimeout(toolTipDelay);
        setIsActive(false);
    };

    return (
        <div
            className='tooltip-wrapper'
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            {isActive && (
                <div className={`tooltip ${position || 'bottom'}`}>
                    {content}
                </div>
            )}
            <span className='tooltip-arrow' />
        </div>
    );
};

export default Tooltip;
