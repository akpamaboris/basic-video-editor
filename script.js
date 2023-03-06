// Initialize video element
var video = document.createElement('video');
video.src = 'testvideo.mp4';
video.controls = true;

// Initialize canvas element
var canvas = document.createElement('canvas');
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;

// Initialize context
var ctx = canvas.getContext('2d');

// Draw video frames to canvas
function drawFrame() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(drawFrame);
}

// Initialize timeline
var timeline = document.createElement('div');
timeline.style.width = '100%';
timeline.style.height = '30px';
timeline.style.backgroundColor = '#ccc';

// Initialize buttons
var playButton = document.createElement('button');
playButton.innerText = 'Play';
playButton.onclick = function() {
  video.play();
  drawFrame();
};

var pauseButton = document.createElement('button');
pauseButton.innerText = 'Pause';
pauseButton.onclick = function() {
  video.pause();
};

var stopButton = document.createElement('button');
stopButton.innerText = 'Stop';
stopButton.onclick = function() {
  video.pause();
  video.currentTime = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};


let newDiv = document.createElement("div");
newDiv.innerHTML = "Hello World i am created by javascript";
document.body.appendChild(newDiv);

// Add elements to document
document.body.appendChild(video);
document.body.appendChild(canvas);
document.body.appendChild(timeline);
document.body.appendChild(playButton);
document.body.appendChild(pauseButton);
document.body.appendChild(stopButton);
