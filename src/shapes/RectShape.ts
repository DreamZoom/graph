class RectShape extends NodeShape{

    doRender(context:IGraphContext){
        context.drawRect(this.x,this.y,this.width,this.height,null);
    }

}