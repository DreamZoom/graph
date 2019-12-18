class CanvasGraph extends Graph{
    canvas:HTMLCanvasElement;
    constructor(canvas:HTMLCanvasElement){
        let ctx=canvas.getContext("2d");
        if(ctx==null){
            throw new Error("canvas can not support 2d");
        }
        super(new CanvasGraphContext(ctx,canvas.width,canvas.height));
        this.canvas=canvas;
        canvas.addEventListener("mousedown",(e)=>{
            console.log(e);
        });
    }
}