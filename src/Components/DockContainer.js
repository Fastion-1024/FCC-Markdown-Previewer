import { useDockContext } from '../dockContext';

const DockContainer = ({ children }) => {
    const { isRow, isReversed, isPanel1Maximised, isPanel2Maximised } =
        useDockContext();

    // Panel1 Maximised
    if (isPanel1Maximised) {
        return (
            <div className='dock-container'>
                <div className='panel1'>{children[0]}</div>
                <div className='panel2 hidden'>{children[1]}</div>
            </div>
        );
    }

    // Panel2 Maximised
    if (isPanel2Maximised) {
        return (
            <div className='dock-container'>
                <div className='panel1 hidden'>{children[0]}</div>
                <div className='panel2'>{children[1]}</div>
            </div>
        );
    }

    if (isRow) {
        // Dock Right
        if (isReversed) {
            return (
                <div className='dock-container row-reverse'>
                    <div className='panel1 row-reverse'>{children[0]}</div>
                    <div className='panel2 row-reverse'>{children[1]}</div>
                </div>
            );
        }
        // Dock Left
        return (
            <div className='dock-container row'>
                <div className='panel1 row'>{children[0]}</div>
                <div className='panel2 row'>{children[1]}</div>
            </div>
        );
    }

    if (isReversed) {
        // Dock Bottom
        return (
            <div className='dock-container column-reverse'>
                <div className='panel1 column-reverse'>{children[0]}</div>
                <div className='panel2 column-reverse'>{children[1]}</div>
            </div>
        );
    }

    // Dock Top
    return (
        <div className='dock-container column'>
            <div className='panel1 column'>{children[0]}</div>
            <div className='panel2 column'>{children[1]}</div>
        </div>
    );
};

export default DockContainer;
