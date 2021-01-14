var database ,dog,dog1,dog2
var position
//var form
var feed,add
var foodobject


//Create variables here

function preload()

{
  dogimg1 = loadImage("Dog.png")
  dogimg2 = loadImage("happydog.png")
	//load images here
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
 
  
} 

function draw(){
 background(46,139,87);


 
 drawSprites();
  
 fill(255,255,254);
 textSize(15);

drawSprites();
}
function readPosition(data){
  position = data.val();

}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(nazo){
  if(nazo>0){
    nazo=nazo-1
  }
  else{
    nazo=0
  }
  database.ref('/').set({
    
  })

}

