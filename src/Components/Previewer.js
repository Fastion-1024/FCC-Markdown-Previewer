import {
    BiCopy,
    BiExpand,
    BiCollapse,
    BiDetail,
    BiCodeAlt,
} from 'react-icons/bi';
import { useDockContext } from '../dockContext';
import { useMarkdownContext } from '../markdownContext';
import Tooltip from './Tooltip';

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
            <Tooltip content='Copy'>
                <button
                    className='icon-btn'
                    onClick={() => copyTextToClipboard(previewerHTML)}
                >
                    <BiCopy />
                </button>
            </Tooltip>
            <Tooltip content='Editor'>
                <button className='icon-btn' onClick={switchPanels}>
                    <BiCodeAlt />
                </button>
            </Tooltip>
        </div>
    );

    const toolbarLarge = (
        <div>
            <Tooltip content='Copy'>
                <button
                    className='icon-btn'
                    onClick={() => copyTextToClipboard(previewerHTML)}
                >
                    <BiCopy />
                </button>
            </Tooltip>
            <Tooltip content={isPanel2Maximised ? 'Collapse' : 'Expand'}>
                <button
                    className='icon-btn'
                    onClick={togglePanel2ExpandCollapse}
                >
                    {isPanel2Maximised ? <BiCollapse /> : <BiExpand />}
                </button>
            </Tooltip>
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
