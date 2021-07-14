import DockContainer from './Components/DockContainer';
import Editor from './Components/Editor';
import Previewer from './Components/Previewer';

function App() {
    return (
        <main>
            <header className='header'>
                <h1>
                    <span>{'{ '}</span>MarkdownPreviewer<span>{' }'}</span>
                </h1>
            </header>
            <DockContainer className='container'>
                <Editor />
                <Previewer />
            </DockContainer>
        </main>
    );
}

export default App;
