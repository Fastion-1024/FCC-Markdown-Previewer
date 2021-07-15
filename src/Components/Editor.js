import { BiCopy, BiExpand, BiCollapse, BiCodeAlt } from 'react-icons/bi';
import { useDockContext } from '../dockContext';
import { useMarkdownContext } from '../markdownContext';
import DropDownButton from './DropDownButton';

const Editor = () => {
    const { editorText, setEditorText, editorLineNumbers } =
        useMarkdownContext();

    const { isPanel1Maximised, togglePanel1ExpandCollapse } = useDockContext();

    return (
        <>
            <header className='editor-header'>
                <div>
                    <BiCodeAlt className='header-icon' />
                    <h2>Editor</h2>
                </div>
                <div>
                    <button className='icon-btn'>
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
                />

                <textarea
                    id='editor'
                    className='editor-input'
                    wrap='off'
                    value={editorText}
                    onChange={(e) => setEditorText(e.target.value)}
                />
            </div>
        </>
    );
};

export default Editor;
