import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

 // Bideo.js
(function () {

  var bv = new window.Bideo();
  bv.init({
    
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'https://ak8.picdn.net/shutterstock/videos/12623018/preview/stock-footage-hollywood-sign.mp4',
        type: 'video/mp4'
      }
    //   {
    //     src: 'https://www.shutterstock.com/video/clip-12623018-hollywood-sign',
    //     type: 'video'
    //   }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());

