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
        this.ctx.fillRect(this.tx(x),this.ty(y),width,height);  
    }

    drawImage(image:string,x:number,y:number,width:number,height:number){
        var img=new Image()
        img.onload = ()=>{
            this.ctx.drawImage(img,this.tx(x)-width/2,this.ty(y)-height/2,width,height);
        }
        img.src=image;   
    }

    drawLine(x1:number,y1:number,x2:number,y2:number,style:any){
        this.ctx.moveTo(this.tx(x1),this.ty(y1));
        this.ctx.lineTo(this.tx(x2),this.ty(y2));
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "#AA394C";
        this.ctx.stroke();
    }
}