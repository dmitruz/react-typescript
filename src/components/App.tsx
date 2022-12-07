import * as React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Counter from './Counter';
import CounterFn from './CounterFn';
import ColorPicker from './ColorPicker';
import Form from './Form';
import TodoView from './TodoView';



const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

    const App = () => (
  <>
    <h1>React with TypeScript </h1>

    <ul className="Link__list">
      
      <li>
        <Link className="Link__list-item active" to="/counter-fn">Счётчик-функция</Link>
      </li>
      <li>
        <Link className="Link__list-item" to="/colorpicker">Колорпикер</Link>
      </li>
      <li>
      
        <Link className="Link__list-item" to="/form">Форма</Link>
      </li>
      <li>
        <Link className="Link__list-item" to="/sync-todos">Заметки</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/counter-cls"
        element={<Counter />} />
      
      <Route path="/counter-fn"
        element={<CounterFn />} />
      
      <Route path="/colorpicker"
        element={<ColorPicker options={colorPickerOptions} />} />
      
      <Route path="/form"
        element={<Form onSubmit={cred => console.log(cred)} />} />
     
      <Route path="/sync-todos"
        element={<TodoView />} />
      
    </Routes>
  </>
);
    
export default App;