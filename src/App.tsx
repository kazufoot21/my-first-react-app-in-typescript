import React from 'react';
import CounterWithReducer from './CounterWithRedcer';

interface AppProps {
    message?: string;
}

const App: React.FunctionComponent<AppProps> = ({message}) => {
    return (
        <div>
            <CounterWithReducer />
        </div>
    );
};

App.defaultProps = {
    message: 'Hello, defaultProps!',
};

export default App;
