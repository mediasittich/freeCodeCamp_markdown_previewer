import React, { useState, useEffect } from 'react';
import marked from 'marked';

import './App.css';

const initialExample = `
# H1

## H2

[This is a link](https://www.freecodecamp.org)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

## Blockquote

> This blockquote will change based on the HTML settings above.

## Code

Inline \`code\` has \`back-ticks around\` it.

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

## An image:

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

---------------

And **bolded text**.
`

marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: true,
});

function App() {
    const [markdown, setMarkdown] = useState(initialExample);
    const [html, setHtml] = useState('');

    useEffect(() => {
        const tokens = marked.lexer(markdown);
        const parsedHtml = marked.parser(tokens);
        setHtml(parsedHtml)
    }, [markdown]);

    const handleChange = (event) => {
        setMarkdown(event.target.value)
    }

    return (
        <div className="d-flex flex-column h-100">
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <a href="/" className="navbar-brand">Markdown Previewer</a>
                </nav>
            </header>
            <main className="flex-grow-1">
                <div className="row m-0 h-100">
                    <div className="col-12 col-md-6 p-0 d-flex flex-column">
                        <div className="border-right border-bottom">
                            <h6 className="text-muted m-0 pl-4 py-3">MARKDOWN</h6>
                        </div>
                        <div className="form-group m-0 d-flex flex-grow-1">
                            <textarea
                                id="editor"
                                className="form-control border-0 rounded-0 mh-100 bg-light text-dark"
                                value={markdown}
                                onChange={(event) => handleChange(event)}
                                // onChange -> set markdown -> parse to html -> render html
                            >{markdown}</textarea>
                        </div>
                    </div>
                    <div className=".d-none .d-md-block col-md-6 p-0 d-flex flex-column">
                    <div className="border-bottom">
                            <h6 className="text-muted m-0 pl-4 py-3">PREVIEW</h6>
                        </div>
                        <div
                            id="preview"
                            className="flex-grow-1 border-left mh-100 p-3 text-dark" 
                            dangerouslySetInnerHTML={{__html: html}}
                        >
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
