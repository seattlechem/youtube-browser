import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  } 
}
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
