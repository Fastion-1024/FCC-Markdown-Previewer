import { useState, useEffect } from 'react';

const DockContainer = ({ children }) => {
    return (
        <div className='dock-container'>
            <div className='panel1'>{children[0]}</div>
            <div className='panel2'>{children[1]}</div>
        </div>
    );
};

export default DockContainer;
