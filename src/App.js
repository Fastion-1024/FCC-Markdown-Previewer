import DockContainer from './Components/DockContainer';
import Editor from './Components/Editor';
import Previewer from './Components/Previewer';
import { DockProvider } from './dockContext';
import { BiSun, BiMoon, BiToggleLeft, BiToggleRight } from 'react-icons/bi';
import { useMarkdownContext } from './markdownContext';

function App() {
    const { isLightThemeActive, toggleTheme } = useMarkdownContext();

    return (
        <main
            className={`${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}
        >
            <header className='header'>
                <h1>
                    <span>{'{ '}</span>MarkdownPreviewer<span>{' }'}</span>
                </h1>
                <button className='theme-toggle' onClick={toggleTheme}>
                    {isLightThemeActive ? (
                        <BiSun className='theme-toggle-light-icon' />
                    ) : (
                        <BiMoon className='theme-toggle-dark-icon' />
                    )}
                    {isLightThemeActive ? <BiToggleLeft /> : <BiToggleRight />}
                </button>
            </header>
            <DockProvider>
                <DockContainer className='container'>
                    <Editor />
                    <Previewer />
                </DockContainer>
            </DockProvider>
        </main>
    );
}

export default App;
