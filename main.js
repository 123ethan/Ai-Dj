song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song_status = "";
scoreLeftWrist = 0
Song1 = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    Song1 = song1.isPlaying();
    fill("FF0000")
    stroke("FF0000")
    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX , leftWristY , 20);
    song2.stop()
    }
    if(Song1 = "false")
    {
song1.play()
document.getElementById("heading").innerHTML = "Song 1"
    }
}

function preload() {
    song1 = "music.mp3"
    song2 = "music.mp3"
}
function modelLoaded() {
    console.log('Posenet is initialized')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist )

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY" + leftWristY)

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWristX =" + rightWristX + "rightWristY" + rightWristY)
    }
}