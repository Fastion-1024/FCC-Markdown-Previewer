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
                    <BiCopy aria-hidden={true} focusable={false} />
                    <span className='visually-hidden'>Copy Editor Text</span>
                </button>
            </Tooltip>
            <Tooltip content='Previewer'>
                <button className='icon-btn' onClick={switchPanels}>
                    <BiDetail aria-hidden={true} focusable={false} />
                    <span className='visually-hidden'>Switch To Previewer</span>
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
                    <BiCopy aria-hidden={true} focusable={false} />
                    <span className='visually-hidden'>Copy Editor text</span>
                </button>
            </Tooltip>
            <DropDownButton />
            <Tooltip content={isPanel1Maximised ? 'Collapse' : 'Expand'}>
                <button
                    className='icon-btn'
                    onClick={togglePanel1ExpandCollapse}
                >
                    {isPanel1Maximised ? (
                        <>
                            <BiCollapse aria-hidden={true} focusable={false} />
                            <span className='visually-hidden'>
                                Collapse Editor
                            </span>
                        </>
                    ) : (
                        <>
                            <BiExpand aria-hidden={true} focusable={false} />
                            <span className='visually-hidden'>
                                Expand Editor
                            </span>
                        </>
                    )}
                </button>
            </Tooltip>
        </div>
    );

    return (
        <>
            <header className='editor-header'>
                <div>
                    <BiCodeAlt
                        className='header-icon'
                        aria-hidden={true}
                        focusable={false}
                    />
                    <h2>Editor</h2>
                </div>
                {windowDimensions.width <= 768 ? toolbarSmall : toolbarLarge}
            </header>
            <div className='editor-input-container'>
                <label htmlFor='lineNumbers' className='visually-hidden'>
                    Editor Line Numbers
                </label>
                <textarea
                    id='lineNumbers'
                    className='line-numbers'
                    readOnly={true}
                    focusable={false}
                    value={editorLineNumbers}
                    ref={scrollRef}
                    tabIndex='-1'
                />

                <label htmlFor='editor' className='visually-hidden'>
                    Markdown Editor
                </label>
                <textarea
                    id='editor'
                    className='editor-input'
                    wrap='off'
                    value={editorText}
                    autoFocus={true}
                    onChange={(e) => setEditorText(e.target.value)}
                    onScroll={(e) => handleScroll(e)}
                />
            </div>
        </>
    );
};

export default Editor;
