import React from 'react';

import { GetRequest, GetRequestDownload } from './';

class App extends React.Component {
    render() {
        return (
            <div>
                <GetRequest />
                <GetRequestDownload />
            </div>
        );
    }
}

export { App }; 