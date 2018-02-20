import React from 'react';

// const VideoDetail = (props) => {
//   const video = props.video;
const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId= video.id.videoId;     //see f12/network.search?path=snippet
  const url= 'https://www.youtube.com/embed/' + videoId;  //string
  //const url= `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className= "video-detail col-md-8">
      <div className= "embed-responsive embed-responsive-16by9">
        <iframe src={url} className= "embed-responsive-item"></iframe>
      </div>
      <div className= "details">
        <h1>{video.snippet.title}</h1>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
