import { useState } from 'react';
import {
    BiLayout,
    BiDockLeft,
    BiDockRight,
    BiDockTop,
    BiDockBottom,
} from 'react-icons/bi';
import { useDockContext } from '../dockContext';
import Tooltip from './Tooltip';

const DropDownButton = () => {
    const { setIsRow, setIsReversed } = useDockContext();

    return (
        <div className='dropdown'>
            <Tooltip content='Layout'>
                <button className='dropdown-btn'>
                    <BiLayout />
                </button>
            </Tooltip>
            <div className='dropdown-content'>
                <Tooltip content='Dock Left' position='left'>
                    <button
                        className='dropdown-btn'
                        onClick={() => {
                            setIsRow(true);
                            setIsReversed(false);
                        }}
                    >
                        <BiDockLeft />
                    </button>
                </Tooltip>
                <Tooltip content='Dock Right' position='left'>
                    <button
                        className='dropdown-btn'
                        onClick={() => {
                            setIsRow(true);
                            setIsReversed(true);
                        }}
                    >
                        <BiDockRight />
                    </button>
                </Tooltip>
                <Tooltip content='Dock Top' position='left'>
                    <button
                        className='dropdown-btn'
                        onClick={() => {
                            setIsRow(false);
                            setIsReversed(false);
                        }}
                    >
                        <BiDockTop />
                    </button>
                </Tooltip>
                <Tooltip content='Dock Bottom' position='left'>
                    <button
                        className='dropdown-btn'
                        onClick={() => {
                            setIsRow(false);
                            setIsReversed(true);
                        }}
                    >
                        <BiDockBottom />
                    </button>
                </Tooltip>
            </div>
        </div>
    );
};

export default DropDownButton;
