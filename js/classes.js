class Pony{
    constructor(player){
	
	this.image = new Image();
	this.image.src = './figs/ponies.png'

	this.sheetWidth = 408
	this.sheetHeight = 272

	this.cols = 12;
	this.rows = 8;
	this.width = this.sheetWidth / this.cols;
	this.height = this.sheetHeight / this.rows;
	this.currentFrame = 0
    }

    
    
    updateFrame(){
	this.currentFrame = ++this.currentFrame % (this.cols/4);
	this.x = this.currentFrame * this.width ;
	this.y = 0;
    
    }
    
    move(direction){
	let scale = 4;
	let d;
	switch(direction){
	case "down":
	    d = 0;
	    break;
	case "left":
	    d = 1;
	    break;
	case "right":
	    d = 2;
	    break;
	case "up":
	    d = 3
	    break;
	}
	
	this.updateFrame()
	
	ctx.drawImage(this.image,
		      this.x,this.width*d,this.width, this.height,
		      0,0,this.width*scale,this.height*scale)
    }
    
    
    
}

class Background{
    constructor(){
	this.x = 0;
	this.y = 0;
	this.width = canvas.width;
	this.height = canvas.height;
	this.image = new Image();
	this.image.src = "./figs/jungle_bg.png"
    }

    draw(){
	ctx.drawImage(this.image,
		      this.x, this.y, this.width, this.height)
		      //this.x, this.y, this.width, this.height)
    }
}
