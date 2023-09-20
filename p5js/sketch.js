var Jake;
var Jakee;

function preload(){
        Jake = createImage("https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/JaketheDog.png/220px-JaketheDog.png");
        Jakee = loadImage("../media/images/5c80f64272f5d9028c17ed18.png");

}

function draw(){
    Jake.position(0,0);
    Jake.size([200], [200]);
    image(Jakee, 200, 200, 100, 100)
}