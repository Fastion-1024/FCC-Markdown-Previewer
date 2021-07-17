import {
    BiCopy,
    BiExpand,
    BiCollapse,
    BiDetail,
    BiCodeAlt,
} from 'react-icons/bi';
import { useDockContext } from '../dockContext';
import { useMarkdownContext } from '../markdownContext';

const Previewer = () => {
    const { previewerHTML, copyTextToClipboard } = useMarkdownContext();
    const {
        isPanel2Maximised,
        togglePanel2ExpandCollapse,
        windowDimensions,
        switchPanels,
    } = useDockContext();

    const toolbarSmall = (
        <div>
            <button
                className='icon-btn'
                onClick={() => copyTextToClipboard(previewerHTML)}
            >
                <BiCopy />
            </button>
            <button className='icon-btn' onClick={switchPanels}>
                <BiCodeAlt />
            </button>
        </div>
    );

    const toolbarLarge = (
        <div>
            <button
                className='icon-btn'
                onClick={() => copyTextToClipboard(previewerHTML)}
            >
                <BiCopy />
            </button>
            <button className='icon-btn' onClick={togglePanel2ExpandCollapse}>
                {isPanel2Maximised ? <BiCollapse /> : <BiExpand />}
            </button>
        </div>
    );

    return (
        <>
            <header className='editor-header'>
                <div>
                    <BiDetail className='header-icon' />
                    <h2>Previewer</h2>
                </div>
                {windowDimensions.width <= 768 ? toolbarSmall : toolbarLarge}
            </header>
            <div
                id='preview'
                className='previewer'
                dangerouslySetInnerHTML={{ __html: previewerHTML }}
            />
        </>
    );
};

export default Previewer;
