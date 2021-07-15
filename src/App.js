import DockContainer from './Components/DockContainer';
import Editor from './Components/Editor';
import Previewer from './Components/Previewer';
import { DockProvider } from './dockContext';

function App() {
    return (
        <main>
            <header className='header'>
                <h1>
                    <span>{'{ '}</span>MarkdownPreviewer<span>{' }'}</span>
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
