class RectShape extends NodeShape{

    render(context:IGraphContext){
        context.drawRect(this.x,this.y,this.width,this.height,null);
    }

}