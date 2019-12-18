class EdgeShape extends Shape{
    from:NodeShape;
    to:NodeShape;
    constructor(from:NodeShape,to:NodeShape){
        super();
        this.from = from;
        this.to=to;
    }

    render(context:IGraphContext){
        context.drawLine(this.from.x,this.from.y,this.to.x,this.to.y,null);
    }
}