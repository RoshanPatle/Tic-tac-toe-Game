'use strict'

const turnaudio=new Audio('stonesound.mpeg');
const btnreset= document.querySelector('#reset');
const imgboxis=document.querySelector('.imgbox')

let turn='x';
let gameover=false;

// function to change the turn
const changeturn= function(){
    return turn === 'x'? '0':'x'
};

// function to check win

const checkwin=function(){
   let boxtexts=document.getElementsByClassName('boxtext');
   
let win =[
[0,1,2,5 , 5,0],
[3,4,5,5,15,0],
[6,7,8 ,5,25,0],
[0,3,6 ,-5,15,90],
[1,4,7 ,5,15,90],
[2,5,8,15,15,90],
[0,4,8 ,5,15,45],
[2,4,6 ,5,15,135],

]

win.forEach(function(e){
    if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText !=='')){
      document.querySelector('.info').innerText=boxtexts[e[0]].innerText+' '+ 'won';
      gameover=true;
     imgboxis.classList.remove('hidden');

     // document.querySelector('.line').style.transform=`translate(${e[3]}vw ,${e[4]}vw) rotate${e[5]}deg)`;
       
    }
})
};


// game logic
const boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(function(element){
    const boxtexts=element.querySelector('.boxtext');
    element.addEventListener('click',function(){
        if(boxtexts.innerText===''){
            boxtexts.innerText=turn;
            turnaudio.play();
            turn=changeturn();
            checkwin();
if(!gameover){
            document.querySelector('.info').innerText='turn for'+' '+ turn;
}

        }
    })
})

btnreset.addEventListener('click', function(){
    let boxtexts=document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach( 
function(element){
    element.innerText='';
})
turn='x'
document.querySelector('.info').innerText='turn for'+' '+ turn;
imgboxis.classList.add('hidden');

})

