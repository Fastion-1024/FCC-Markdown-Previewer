import React, { useState, useEffect, useContext } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import placeholderText from './Resources/placeholderMD.md';

const MarkdownContext = React.createContext();

const MarkdownProvider = ({ children }) => {
    const [editorText, setEditorText] = useState('');
    const [editorLineNumbers, setEditorLineNumbers] = useState('1');
    const [previewerHTML, setPreviewerHTML] = useState('');
    const [isLightThemeActive, setIsLightThemeActive] = useState(true);

    useEffect(() => {
        fetchPlaceholderText();
    }, []);

    useEffect(() => {
        updateLineNumbers();
        updatePreviewerText();
    }, [editorText]);

    const fetchPlaceholderText = async () => {
        const response = await fetch(placeholderText);
        const data = await response.text();

        setEditorText(data);
    };

    const updateLineNumbers = () => {
        var content = editorText.split('\n');
        let newLineNumbers = '';

        for (let i = 1; i <= content.length; i++) {
            newLineNumbers += `${i} \n`;
        }

        setEditorLineNumbers(newLineNumbers);
    };

    const updatePreviewerText = () => {
        marked.setOptions({ breaks: true });
        const dirty = marked(editorText);
        const clean = DOMPurify.sanitize(dirty, {
            USE_PROFILES: { html: true },
        });
        console.log(clean);
        setPreviewerHTML(clean);
    };

    const toggleTheme = () => {
        setIsLightThemeActive(!isLightThemeActive);
    };

    return (
        <MarkdownContext.Provider
            value={{
                editorText,
                setEditorText,
                editorLineNumbers,
                setEditorLineNumbers,
                previewerHTML,
                sePreviewerHTML: setPreviewerHTML,
                isLightThemeActive,
                toggleTheme,
            }}
        >
            {children}
        </MarkdownContext.Provider>
    );
};

export const useMarkdownContext = () => {
    return useContext(MarkdownContext);
};

export { MarkdownContext, MarkdownProvider };
