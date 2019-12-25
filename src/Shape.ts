class Shape extends Emiter{
    selected:boolean;
    x:number;
    y:number;

    width:number;
    height:number;
    alpha:number;
    animations:Array<Function>;
    constructor(){
        super();
        this.selected=false;
        this.x=0;
        this.y=0;
        this.width=100;
        this.height=100;
        this.alpha=1;
        this.animations=[];
    }


    beforeRender(context:IGraphContext){

    }

    render(context:IGraphContext){
        this.beforeRender(context);
        this.doRender(context);
        this.afterRender(context);
    }

    doRender(context:IGraphContext){

    }

    afterRender(context:IGraphContext){
        this.animations.map(a=>{
            a.call(this,this);
        });
    }



    hit(x:number,y:number):boolean{
        return false;
    }

    getAnchorPoints():Array<any>{
        return [];
    }

    animate(animateFunc:Function){
        this.animations.push(animateFunc);
    }
}