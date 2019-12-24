class Shape extends Emiter{
    selected:boolean;
    x:number;
    y:number;

    width:number;
    height:number;
    alpha:number;
    constructor(){
        super();
        this.selected=false;
        this.x=0;
        this.y=0;
        this.width=100;
        this.height=100;
        this.alpha=1;
    }
    render(context:IGraphContext){
        
    }

    hit(x:number,y:number):boolean{
        return false;
    }

    getAnchorPoints():Array<any>{
        return [];
    }
}