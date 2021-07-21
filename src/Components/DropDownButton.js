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
                    <BiLayout aria-hidden={true} focusable={false} />
                    <span className='visually-hidden'>Layout</span>
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
                        <BiDockLeft aria-hidden={true} focusable={false} />
                        <span className='visually-hidden'>
                            Dock Editor Left
                        </span>
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
                        <BiDockRight aria-hidden={true} focusable={false} />
                        <span className='visually-hidden'>
                            Dock Editor Right
                        </span>
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
                        <BiDockTop aria-hidden={true} focusable={false} />
                        <span className='visually-hidden'>Dock Editor Top</span>
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
                        <BiDockBottom aria-hidden={true} focusable={false} />
                        <span className='visually-hidden'>
                            Dock Editor Bottom
                        </span>
                    </button>
                </Tooltip>
            </div>
        </div>
    );
};

export default DropDownButton;
