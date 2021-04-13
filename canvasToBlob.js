// Could also use/copy https://github.com/eligrey/canvas-toBlob.js

(function (){

  const el = document.createElement('canvas');


  function msToBlob(canvas, callback) {
    const blob = canvas.msToBlob();

    return callback(blob);
  }

  function toBlob(canvas, callback){
    return canvas.toBlob(callback);
  }


  window.canvasToBlob = el.toBlob ? toBlob : msToBlob;
})()
