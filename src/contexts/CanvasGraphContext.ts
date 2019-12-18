class CanvasGraphContext implements IGraphContext{

    canvas:CanvasRenderingContext2D 
    constructor(canvas:CanvasRenderingContext2D){
        this.canvas=canvas;
    }
    drawRect(x:number,y:number,width:number,height:number,style:any){
        this.canvas.fillStyle="#FF0000";
        this.canvas.fillRect(x,y,width,height);  
    }

    drawImage(image:string,x:number,y:number){
        var img=new Image()
        img.onload = ()=>{
            this.canvas.drawImage(img,x,y);
        }
        img.src=image;   
    }

    drawLine(x1:number,y1:number,x2:number,y2:number,style:any){
        this.canvas.moveTo(x1,y1);
        this.canvas.lineTo(x2,y2);
        this.canvas.lineWidth = 2;
        this.canvas.strokeStyle = "#AA394C";
        this.canvas.stroke();
    }
}