import _ from 'Lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBh4i5ioISsjfS31eNEKnzvwMUESkeiYes';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Reactjs');
  }

videoSearch(term) {
  YTSearch({key: API_KEY, term: term}, (data) => {
    this.setState({
      videos: data,
      selectedVideo: data[0]
    });
  });
}

  // render(){
  //   return (
  //     <div>
  //       <SearchBar onSearchTermChange ={term => this.videoSearch(term)} />

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
          videos ={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(
  <App />, document.querySelector('.container')
);
