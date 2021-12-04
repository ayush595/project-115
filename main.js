function preload() {}
 
function setup() {
    canvas= createCanvas(500, 500);
    canvas.center();
    webcam= createCapture(VIDEO);
    webcam.size(500, 500);
    webcam.hide();

    posenetter= ml5.poseNet(webcam, modelLoaded);

}
function modelLoaded() {
    console.log("posenet is loaded");
}
function draw() {
    image(webcam, 0, 0,500 , 500)
}
function takesnap() {
    save("minecraftscrazyman.png");
}