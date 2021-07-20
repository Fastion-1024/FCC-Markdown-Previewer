import { useRef } from 'react';
import {
    BiCopy,
    BiExpand,
    BiCollapse,
    BiCodeAlt,
    BiDetail,
} from 'react-icons/bi';
import { useDockContext } from '../dockContext';
import { useMarkdownContext } from '../markdownContext';
import DropDownButton from './DropDownButton';
import Tooltip from './Tooltip';

const Editor = () => {
    const {
        editorText,
        setEditorText,
        editorLineNumbers,
        copyTextToClipboard,
    } = useMarkdownContext();

    const {
        isPanel1Maximised,
        togglePanel1ExpandCollapse,
        windowDimensions,
        switchPanels,
    } = useDockContext();
    const scrollRef = useRef(null);

    const handleScroll = (e) => {
        scrollRef.current.scrollTop = e.target.scrollTop;
    };

    const toolbarSmall = (
        <div>
            <Tooltip content='Copy' position='bottom'>
                <button
                    className='icon-btn'
                    onClick={() => copyTextToClipboard(editorText)}
                >
                    <BiCopy />
                </button>
            </Tooltip>
            <Tooltip content='Previewer'>
                <button className='icon-btn' onClick={switchPanels}>
                    <BiDetail />
                </button>
            </Tooltip>
        </div>
    );

    const toolbarLarge = (
        <div>
            <Tooltip content='Copy'>
                <button
                    className='icon-btn'
                    onClick={() => copyTextToClipboard(editorText)}
                >
                    <BiCopy />
                </button>
            </Tooltip>
            <DropDownButton />
            <Tooltip content={isPanel1Maximised ? 'Collapse' : 'Expand'}>
                <button
                    className='icon-btn'
                    onClick={togglePanel1ExpandCollapse}
                >
                    {isPanel1Maximised ? <BiCollapse /> : <BiExpand />}
                </button>
            </Tooltip>
        </div>
    );

    return (
        <>
            <header className='editor-header'>
                <div>
                    <BiCodeAlt className='header-icon' />
                    <h2>Editor</h2>
                </div>
                {windowDimensions.width <= 768 ? toolbarSmall : toolbarLarge}
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
