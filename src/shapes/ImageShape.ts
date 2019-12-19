class ImageShape extends NodeShape{
    src:string;
    img:HTMLImageElement;
    loaded:boolean;
    constructor(src:string){
        super();
        this.src=src||"";
        this.img=new Image();
        this.img.onload=()=>{
            this.loaded=true;
        };
        this.loaded=false;
        this.img.src=src;
    }

    render(context:IGraphContext){
        // context.drawRect(this.x,this.y,this.width,this.height,null);
        if(this.loaded){
            if(this.selected){
                context.setShadow();
            }  
            context.drawImage(this.img,this.x,this.y,this.width,this.height);
            if(this.selected){
                context.clearShadow();
            }  
        }
       
        
    }

}