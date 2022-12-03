import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Counter from './Counter';
import CounterFn from './CounterFn';
import ColorPicker from './ColorPicker';
import Form from './form';

const App = () => {

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

    <>
    <h1>React with TypeScript</h1>

  
        <Routes>
            <Route path="./counter-cls">
                <Counter />
            </Route>
            <Route path="./counter-fn">
                <CounterFn />
            </Route>
            <Route path="./colorpicker">
                <ColorPicker options={colorPickerOptions} />
            </Route>
            <Route path="./form">
                <Form onSubmit={cred => console.log(cred)} />
            </Route>
           

        </Routes>
    
    </>
}

export default App;