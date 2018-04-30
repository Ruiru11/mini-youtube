import React, { Component } from 'react'

const VideoDetail = ({video}) =>  {
    if(!video){
        return <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading.....</span>
        </div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8 ">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="detials">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
      </div>
    )
  
};

export default VideoDetail;
