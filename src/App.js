import './App.css';
import { Router } from '@reach/router'
import Search from './components/Search'
import Results from './components/Results'

function App() {
  return (
    <div className="App">
      <Search/>
      <Router>
        <Results path = '/:category/:id'></Results>
      </Router>
    </div>
  );
}

export default App;