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
        setPreviewerHTML(clean);
    };

    const toggleTheme = () => {
        setIsLightThemeActive(!isLightThemeActive);
    };

    const copyTextToClipboard = (text) => {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(
            function () {
                console.log('Async: Copying to clipboard was successful!');
            },
            function (error) {
                console.error('Async: Could not copy text: ', error);
            }
        );
    };

    const fallbackCopyTextToClipboard = (text) => {
        // Create new element
        var element = document.createElement('textarea');
        // Set value (string to be copied)
        element.value = text;
        // Set non-editable to avoid focus and move outside of view
        element.setAttribute('readonly', '');
        element.style = { position: 'absolute', left: '-9999px' };
        document.body.appendChild(element);
        // Select text inside element
        element.select();
        // Copy text to clipboard
        try {
            let wasSuccessful = document.execCommand('copy');
            let message = wasSuccessful ? 'successful' : 'unsuccessful';
            console.log(`Fallback: Copying text command was ${message}`);
        } catch (error) {
            console.error('Fallback: Was unable to copy', error);
        }

        // Remove temporary element
        document.body.removeChild(element);
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
                copyTextToClipboard,
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
