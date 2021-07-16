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
                    <div className='theme-toggle'>
                        {isLightThemeActive ? <BiSun /> : <BiMoon />}
                        <button onClick={toggleTheme}>
                            {isLightThemeActive ? (
                                <BiToggleLeft />
                            ) : (
                                <BiToggleRight />
                            )}
                        </button>
                    </div>
                </h1>
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
