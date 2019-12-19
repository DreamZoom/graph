class NodeShape extends Shape{
   


    constructor(){
        super();
        
    }
   
    hit(x:number,y:number):boolean{
        if(x>=this.x-this.width/2 && x<=this.x+this.width/2 && y>=this.y-this.height/2 && y<=this.y+this.height/2){
            return true;
        }
        return false;
    }

    getAnchorPoints():Array<any>{
        let points=[];
        points.push({x:this.x-this.width/2,y:this.y-this.height/2});
        points.push({x:this.x,y:this.y-this.height/2});
        points.push({x:this.x+this.width/2,y:this.y-this.height/2});

        points.push({x:this.x-this.width/2,y:this.y});
        points.push({x:this.x,y:this.y});
        points.push({x:this.x+this.width/2,y:this.y});

        points.push({x:this.x-this.width/2,y:this.y+this.height/2});
        points.push({x:this.x,y:this.y+this.height/2});
        points.push({x:this.x+this.width/2,y:this.y+this.height/2});
        return points;
    }
}