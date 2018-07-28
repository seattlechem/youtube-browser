import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const API_Key = 'AIzaSyDoChwaCR7ezbYQeMRGdy12lPS2Ok72uOk';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_Key, term: 'korea'}, (data) => {
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
