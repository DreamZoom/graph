class EdgeShape extends Shape{
    from:NodeShape;
    to:NodeShape;
    constructor(from:NodeShape,to:NodeShape){
        super();
        this.from = from;
        this.to=to;
    }

    getBestPoint(points_1:Array<any>,points_2:Array<any>):Array<any>{

        let map:any = {};
        for(var i=0;i<points_1.length;i++){
            for(var j=0;j<points_2.length;j++){
                let distance=this.distance(points_1[i],points_2[j]);
                map[(i+"-"+j)]={i,j, distance};
            }
        }

        let min="";
        for(var k in map){
            if(min=="") {
                min=k;
            }
            else{
                if(map[min].distance>map[k].distance){
                    min=k;
                }
            }
        }

        if(min!=""){
            return [points_1[map[min].i],points_2[map[min].j]];
        }

        return [];
    }

    distance(p1:any,p2:any):number{
        return Math.sqrt(Math.pow(p2.y-p1.y,2)+Math.pow(p2.x-p1.x,2)) ;
    }

    render(context:IGraphContext){
        let points_1 = this.from.getAnchorPoints();
        let points_2 = this.to.getAnchorPoints();
        let points= this.getBestPoint(points_1,points_2);
        if(points.length==2){
            context.drawLine(points[0].x,points[0].y,points[1].x,points[1].y,null);
        }
        
    }
}