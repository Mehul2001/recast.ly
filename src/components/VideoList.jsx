import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

console.log(exampleVideoData);
var VideoList = (props) => (
  <div className="video-list">
    <ul>{props.videoList.map(video =>
      <VideoListEntry key = {video.id.videoId} video = {video} /> )} 
    </ul>
    {/* // <div>{exampleVideoData[1].id.videoId}</div>
    // <div>{exampleVideoData[2].id.videoId}</div>
    // <div>{exampleVideoData[3].id.videoId}</div>
    // <div>{exampleVideoData[4].id.videoId}</div> */}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
