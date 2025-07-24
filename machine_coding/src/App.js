import './App.css';
import { SimpleCounter } from './components/SimpleCounter';
import { SimpleRefExample } from './components/SimpleRefExample';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <SimpleCounter />
      <SimpleRefExample />
      <TodoList />
    </div>
  );
}

export default App;
