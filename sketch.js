var Gamestate = 0;
var playercount;
var database;
var form,player,game;
var allplayers;
var cars,car1,car2,car3,car4;
var car1img,car2img,car3img,car4img,track,ground;
var rank;

function preload(){
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");

    track = loadImage("images/track.jpg");

    ground = loadImage("images/ground.png");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);


    
    database = firebase.database();
    
    game = new Game();

    game.getstate();

    game.start();
}

function draw(){
    background(160);

    if(playercount===4){
        game.update(1);
    }

    if(Gamestate===1){
        game.play();
    }

    if(Gamestate===2){

        game.end();

    }
}

