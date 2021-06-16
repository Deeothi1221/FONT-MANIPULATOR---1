function setup() {
    video = createCapture(VIDEO);
    video.size(400, 500);


    canvas = createCanvas(500, 500);
    canvas.position(560, 160);

}

function draw() {
    background("#11ff00");
}