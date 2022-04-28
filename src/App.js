import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Wallet Tracker</h2>
        <div>
        <li className="nav-item">
              <Link to={"/read"} className="nav-link">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">
                Add
              </Link>
            </li>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;
