import './App.css';
import { SimpleCounter } from './components/SimpleCounter';
import { SimpleRefExample } from './components/SimpleRefExample';
import { TodoList } from './components/TodoList';
import { PaginationExample } from './components/PaginationExample';

function App() {
  return (
    <div className="App">
      {/* <SimpleCounter />
      <SimpleRefExample />
      <TodoList /> */}
      <PaginationExample />
    </div>
  );
}

export default App;
