import { useState, useEffect } from 'react';
import { FaCode, FaExpandAlt, FaCopy } from 'react-icons/fa';
import {
    BiDockLeft,
    BiDockRight,
    BiDockTop,
    BiDockBottom,
} from 'react-icons/bi';

const Editor = () => {
    const [text, setText] = useState('');
    const [lineNumbers, setLineNumbers] = useState('1');

    useEffect(() => {
        var content = text.split('\n');
        let newLineNumbers = '';

        for (let i = 1; i <= content.length; i++) {
            newLineNumbers += `${i} \n`;
        }

        setLineNumbers(newLineNumbers);
    }, [text]);

    return (
        <>
            <header className='editor-header'>
                <div>
                    <FaCode className='header-icon' />
                    <h2>Editor</h2>
                </div>
                <div>
                    <FaCopy className='header-icon' />
                    <BiDockLeft className='header-icon' />
                    <FaExpandAlt className='header-icon' />
                </div>
            </header>
            <div className='editor-input-container'>
                <textarea
                    className='line-numbers'
                    readOnly={true}
                    value={lineNumbers}
                />

                <textarea
                    className='editor-input'
                    wrap='off'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </>
    );
};

export default Editor;
