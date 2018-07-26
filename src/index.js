import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
