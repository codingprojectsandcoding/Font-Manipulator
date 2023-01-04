function setup() {
video = createCapture(VIDEO);
video.size(550, 500);
canvas =  createCanvas(550, 500);
canvas.position(650, 100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw() {
background("#c3ebea");
}
function modelLoaded() {
console.log("PoseNet Is Initialised");
}
function gotPoses(results) {
if (results.length > 0) {
console.log(results);
}
}