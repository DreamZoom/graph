class CanvasGraphContext implements IGraphContext{

    width:number;
    height:number;
    ctx:CanvasRenderingContext2D;
    constructor(canvas:CanvasRenderingContext2D,width:number,height:number){
        
        this.ctx = canvas;
        this.width=width;
        this.height=height;
    }

    tx(x:number):number{
        return x+this.width/2;
    }

    ty(y:number):number{
        return y+this.height/2;
    }

    drawRect(x:number,y:number,width:number,height:number,style:any){
        this.ctx.fillStyle="#FF0000";
        this.ctx.fillRect(this.tx(x)-width/2,this.ty(y)-height/2,width,height);  
    }

    drawImage(image:HTMLImageElement,x:number,y:number,width:number,height:number){
        this.ctx.drawImage(image,this.tx(x)-width/2,this.ty(y)-height/2,width,height);
    }

    drawLine(x1:number,y1:number,x2:number,y2:number,style:any){
        this.ctx.beginPath()
        this.ctx.moveTo(this.tx(x1),this.ty(y1));
        this.ctx.lineTo(this.tx(x2),this.ty(y2));
        this.ctx.lineWidth = 1;
        this.ctx.lineCap = "round";
        this.ctx.strokeStyle = "#AA394C";
        this.ctx.stroke();
    }

    clear(){
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,this.width,this.height);
    }

    setShadow(){
        this.ctx.shadowColor = "blue";   
        this.ctx.shadowOffsetX = 5;   
        this.ctx.shadowOffsetY = 5;   
        this.ctx.shadowBlur= 10;
    }
    clearShadow(){
        this.ctx.shadowOffsetX = 0;   
        this.ctx.shadowOffsetY = 0;  
        this.ctx.shadowBlur= 0; 
    }
}