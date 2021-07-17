import { useRef } from 'react';
import { BiCopy, BiExpand, BiCollapse, BiCodeAlt } from 'react-icons/bi';
import { useDockContext } from '../dockContext';
import { useMarkdownContext } from '../markdownContext';
import DropDownButton from './DropDownButton';

const Editor = () => {
    const {
        editorText,
        setEditorText,
        editorLineNumbers,
        copyTextToClipboard,
    } = useMarkdownContext();

    const { isPanel1Maximised, togglePanel1ExpandCollapse } = useDockContext();
    const scrollRef = useRef(null);

    const handleScroll = (e) => {
        scrollRef.current.scrollTop = e.target.scrollTop;
    };

    return (
        <>
            <header className='editor-header'>
                <div>
                    <BiCodeAlt className='header-icon' />
                    <h2>Editor</h2>
                </div>
                <div>
                    <button
                        className='icon-btn'
                        onClick={() => copyTextToClipboard(editorText)}
                    >
                        <BiCopy />
                    </button>
                    <DropDownButton />
                    <button
                        className='icon-btn'
                        onClick={togglePanel1ExpandCollapse}
                    >
                        {isPanel1Maximised ? <BiCollapse /> : <BiExpand />}
                    </button>
                </div>
            </header>
            <div className='editor-input-container'>
                <textarea
                    className='line-numbers'
                    readOnly={true}
                    value={editorLineNumbers}
                    ref={scrollRef}
                />

                <textarea
                    id='editor'
                    className='editor-input'
                    wrap='off'
                    value={editorText}
                    onChange={(e) => setEditorText(e.target.value)}
                    onScroll={(e) => handleScroll(e)}
                />
            </div>
        </>
    );
};

export default Editor;
