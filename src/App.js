import React from 'react';
import TodoList from './components/ui/todo-list/TodoList';
import StateProvider from './components/wrappers/StateProvider';
import KeyStrokeHandler from './components/wrappers/KeyStrokeHandler';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style/index.css';

function App() {
  return (
    <StateProvider>
      <KeyStrokeHandler>
        <TodoList />
      </KeyStrokeHandler>
    </StateProvider>
  );
}

export default App;
