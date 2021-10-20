leftEyeX = 0;
leftEyeY = 0;

rightEyeX = 0;
rightEyeY = 0;

function preload()
{
    sunglass = loadImage('https://i.postimg.cc/ncZd9bCV/sunglass.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    tint_color ="";

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0,300,300);
    image(sunglass, rightEyeX, rightEyeY, leftEyeX, leftEyeY, 30,30);
    tint(tint_color);
}

function take_snapshot()
{
    save('My_Tracker_Image');
    console.log("Image Taken");
}

function modelLoaded()
{
    console.log("Posnet is initialized")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("leftEye x = " + results[0].pose.leftEye.x);
        console.log("leftEye y = " + results[0].pose.leftEye.y);
        console.log("rightEye x = " + results[0].pose.rightEye.x);
        console.log("rightEye y = " + results[0].pose.rightEye.y);
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
        leftEyeX = results[0].pose.leftEye.x;
        leftEyeY = results[0].pose.leftEye.y;
    }
}

function filter_tint()
{
    tint_color = document.getElementById("color_name_s").value;
}