import { useState } from 'react';
import {
    BiLayout,
    BiDockLeft,
    BiDockRight,
    BiDockTop,
    BiDockBottom,
} from 'react-icons/bi';
import { useDockContext } from '../dockContext';

const DropDownButton = () => {
    const { setIsRow, setIsReversed } = useDockContext();

    return (
        <div className='dropdown'>
            <button className='dropdown-btn'>
                <BiLayout />
            </button>
            <div className='dropdown-content'>
                <button
                    className='dropdown-btn'
                    onClick={() => {
                        setIsRow(true);
                        setIsReversed(false);
                    }}
                >
                    <BiDockLeft />
                </button>
                <button
                    className='dropdown-btn'
                    onClick={() => {
                        setIsRow(true);
                        setIsReversed(true);
                    }}
                >
                    <BiDockRight />
                </button>
                <button
                    className='dropdown-btn'
                    onClick={() => {
                        setIsRow(false);
                        setIsReversed(false);
                    }}
                >
                    <BiDockTop />
                </button>
                <button
                    className='dropdown-btn'
                    onClick={() => {
                        setIsRow(false);
                        setIsReversed(true);
                    }}
                >
                    <BiDockBottom />
                </button>
            </div>
        </div>
    );
};

export default DropDownButton;
