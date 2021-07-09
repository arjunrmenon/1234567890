const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise1.png" ;



function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }
    


    Engine.update(engine);

    // write code to display time in correct format here
    
    
    fill(255);
    textSize(20);
    text("time"+hour,width-200,20);



}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,16);
    

    console.log(datetime+"  " +hour);


    if(hour>=04 && hour<=06){
        debugger;
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
        debugger;
        bg = "sunrise2.png";
    }else if(hour>=08 && hour<=11){
        debugger;
        bg = "sunrise3.png";
    
    }
    else if(hour>=13 && hour<=15){
        debugger;
        bg = "sunrise4.png";
    
    }
    else if(hour>=17 && hour<=18){
        debugger;
        bg = "sunrise9.png";
    

    }
    else if(hour>=19 && hour<=21){
        debugger;
        bg = "sunrise11.png";
    
    }
    else{
        debugger;
        bg = "sunset12.png";
    }
backgroundImg = loadImage(bg);

} 