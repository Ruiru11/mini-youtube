import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Title from './components/title';
import About from './components/about';
const API_KEY = 'AIzaSyBfRsMNK2UKnUSX08YibHnqTnTjcw9C1pA';





class App extends Component {
  constructor(props){
      super(props);
      this.state = { 
          videos:[],
          selectedVideo: null
        };

      this.videoSearch('niki minaj');
  }

  videoSearch(term) {
    YTSearch({key:API_KEY,term:term},(videos) => {
        this.setState({
          videos:videos,
          selectedVideo: videos[0]
      });
  });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return (
      <div>
        <Title />
        <About />
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
         videos={this.state.videos} />
      </div>
    )
  }
}



ReactDom.render(<App />, document.querySelector('.container'));
 
