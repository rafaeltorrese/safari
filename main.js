var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var frame = 0;
var interval;

// from js import classes.js

//let bg = new Background();
var pony = new Pony();



function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    //pony.move('down')
    
}



function start(){
    interval = setInterval(update,1000/30)
}

function stop(){
    clearInterval(interval)
}


addEventListener("keydown", function(e){

    switch(e.keyCode){
    case 37:
	
    }
    if(e.keyCode === 37){
	console.log(e.keycode)
	pony.move('left')
    }
    if(e.keyCode === 38){
	pony.move('up')
    }
    if(e.keyCode === 39){
	pony.move('right')
    }
    if(e.keyCode === 40){
	pony.move('down')
    }
})

start();
