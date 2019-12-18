class ImageShape extends NodeShape{
    src:string;
    constructor(src:string){
        super();
        this.src=src||"";
    }

    render(context:IGraphContext){
        context.drawImage(this.src,this.x,this.y,this.width,this.height);
    }

}