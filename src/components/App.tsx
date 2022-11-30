import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Counter from './Counter';
//import CounterFn from './CounterFn';

const App = () => {
    <>
    <h1>React with TypeScript</h1>

  
        <Routes>
            <Route path="./counter-cls">
                <Counter />
            </Route>
           

        </Routes>
    
    </>
}

export default App;