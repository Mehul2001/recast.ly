import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      isSelected : false,
      video: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search<Search prop1={this.state.isSelected} /></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <h5>VideoPlayer</h5>
              <VideoPlayer video={this.state.video}/>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h5>videoList</h5>
                 <VideoList videoList={this.state.videoList}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
