// game const, variable
let inputDir = {x:0,y:0};
 let foodSound = new Audio(".mpe");
 let gameOver = new Audio(".mpe");
 let moveSound = new Audio('mp1');
let score = 0;
 let speed = 6 ;
 let lastPaintTime = 0;
 let snakeArr =[
    { x: 13, y:15}
 ]
  food = {x: 6,y: 7};

// /game functions


function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000< 1/speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    // console.log(ctime); 
}
function isCollide(sarr){
    return false;
}
function gameEngine(){
    // part1:updateing the snake variable
 
     if(isCollide(snakeArr)){
        gameOver.play();
        musicSound.pause();
        inputDir = {x:0,y:0};
        alert("game Over Pres any key to continoue");
        snakeArr=[{x:13,y:15}];
         musicSound.play();
         score = 0;
     }
    //   If you have eatn the food, incremenet the score and regenrate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
      snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
      let a = 2;
      let b = 16;

      food = {x: Math.round(a + (b-a)* Math.random()),y: Math.round(a + (b-a)* Math.random())} 
    } 
    // moveing the snake 

     for(let i = snakeArr.length - 2;i >=0;i--){
        // const element = array[i] ;
        snakeArr[i+1] = {...snakeArr[i]};
     }
   snakeArr[0].x += inputDir.x;
   snakeArr[0].y += inputDir.y;

    // part 2: render the snake and food
    // Display the snake
   board.innerHTML = "";
   snakeArr.forEach((e,index)=>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    
    if(index === 0){
        snakeElement.classList.add('head');     
    }else{
        snakeElement.classList.add('snake');  
    }
    board.appendChild(snakeElement);

   })
//    Display the food
foodElement = document.createElement('div');
foodElement.style.gridRowStart = food.y;
foodElement.style.gridColumnStart = food.x;
foodElement.classList.add('food');  

board.appendChild(foodElement);

}














//  main logic start hera
window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
inputDir = {x:0,y:1}  ;
// start game
moveSound.play();
switch(e.key){
    case "ArrowUp":
        console.log("ArrowUp");
        inputDir.x = 0;
        inputDir.y = -1;
        break;
    case "ArrowDown":
        console.log("ArrowDown");
        inputDir.x = 0;
        inputDir.y = 1;
        break;
    case "ArrowLeft":
        console.log("ArrowLeft");
        inputDir.x = -1;
        inputDir.y = 0;
        break;
    case "ArrowRight":
        console.log("ArrowRight");
        inputDir.x =  1;
        inputDir.y = 0;
        break;

        default:
            break;
}
});
