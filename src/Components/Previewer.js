import { useState } from 'react';
import { FaEye, FaExpandAlt, FaCopy } from 'react-icons/fa';

const Previewer = () => {
    const [text, setText] = useState('');

    return (
        <>
            <header className='editor-header'>
                <div>
                    <FaEye className='header-icon' />
                    <h2>Previewer</h2>
                </div>
                <div>
                    <FaCopy className='header-icon' />
                    <FaExpandAlt className='header-icon' />
                </div>
            </header>
            <textarea className='previewer' readOnly={true} value={text} />
        </>
    );
};

export default Previewer;
