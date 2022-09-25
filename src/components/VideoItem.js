
const VideoItem =({video, onVideoSelect}) => {
    const myDate = new Date(video.snippet.publishTime).toLocaleDateString('en-US');
// myDate is 12/28/2021

    const myTime = new Date(video.snippet.publishTime).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' }).toString();

    const dateTime = myDate + " " + myTime;
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" alt={video.snippet.title} key={video.id.videoId} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
                <div>
                    {dateTime}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;