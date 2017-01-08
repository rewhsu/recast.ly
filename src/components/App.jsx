// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]} />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData} />
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      title: exampleVideoData[0].snippet.title, 
      description: exampleVideoData[0].snippet.description, 
      url: "https://www.youtube.com/embed/" + exampleVideoData[0].id.videoId
    };
  }

  onVideoListEntryClick(video) {
    console.log('clicked');
    this.setState({
      title: video.snippet.title,
      description: video.snippet.description,
      url: "https://www.youtube.com/embed/" + video.id.videoId
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={window.exampleVideoData[0]} st={this.state} />
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} st={this.state} onC={this.onVideoListEntryClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;