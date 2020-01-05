import React from 'react';

function App() {
    return (
        <div className="h-100">
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <a href="/" className="navbar-brand">Markdown Previewer</a>
                </nav>
            </header>
            <main className="h-100">
                <div className="row m-0 h-100">
                    <div className="col-12 col-md-6 p-0">
                        <div className="border-right border-bottom">
                            <h6 className="text-muted m-0 pl-4 py-3">MARKDOWN</h6>
                        </div>
                        <div className="form-group m-0 d-flex align-content-stretch">
                            <textarea id="editor" className="form-control border-0 rounded-0 mh-100 bg-light text-dark">some markdown</textarea>
                        </div>
                    </div>
                    <div className=".d-none .d-md-block col-md-6 p-0">
                    <div className="border-bottom">
                            <h6 className="text-muted m-0 pl-4 py-3">PREVIEW</h6>
                        </div>
                        <div id="preview" className="border-left mh-100 p-3 bg-light text-dark">rendered html</div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
