const player_car=document.querySelector('.player');
const enemy_car=document.querySelector('.enime');
const enemy_car1=document.querySelector('.enime2');
const startScreen=document.querySelector('.startMenus');
const score=document.querySelector('.score');
const pointsElement=document.querySelector('.points');


const startBtn=document.querySelector('.startPlay');


const maxleft=380,minLeft=5;


let increser=190;
let enimeypositon,enimeypositon1;
let enimeytop1=-150,enimeytop2=-300;

let maxHeight=document.querySelector(".container").clientHeight;

player_car.style.left=increser+"px";
let points=0;
let collison;
const gameOver=()=>{
    score.innerHTML=points;
    startScreen.classList.remove("hideMenu");
    startScreen.classList.add("showMenu");
    clearInterval(collison);
}
startBtn.addEventListener('click',()=>{
    startScreen.classList.remove("showMenu");
    var hidem=setInterval(()=>{
        startScreen.classList.add("hideMenu");
        clearInterval(hidem);
    },50)
    carCheck();
    points=0;
    
})

const carCheck=()=>{

collison=setInterval(()=>
    {
        
        var userCar = player_car.getBoundingClientRect();
        var object_2 = enemy_car.getBoundingClientRect();
        var object_3 = enemy_car1.getBoundingClientRect();
        if (userCar.left < object_2.left + object_2.width  && 
            userCar.left + userCar.width  > object_2.left &&
            userCar.top < object_2.top + object_2.height && 
            userCar.top + userCar.height > object_2.top 
            ||
            userCar.left < object_3.left + object_3.width &&
            userCar.left + userCar.width > object_3.left &&
            userCar.top < object_3.top + object_3.height &&
            userCar.top + userCar.height > object_3.top
            ) 
        {
            gameOver();
            
        }
        else{
            points=points+50;
            pointsElement.innerHTML=points;
        }
    },10)
    
}

document.addEventListener('keydown',(e)=>{
    if(e.keyCode==39){
        if(player_car.style.left==maxleft+"px"){
            return 0;
        }
        increser=increser+5;
        player_car.style.left=increser+"px";
    }
    if(e.keyCode==37){
        if(player_car.style.left==minLeft+"px"){
            return 0;
        } 
        increser=increser-5;
        player_car.style.left=increser+"px";  
         
    }
})
setInterval(()=>{
    enimeypositon=Math.floor(Math.random()*maxleft);
    enemy_car.style.left=enimeypositon+"px";
},3000)
setInterval(()=>{
    enimeypositon1=Math.floor(Math.random()*(maxleft-140));
},3500)


