import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({videos: data});
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  } 
}
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
