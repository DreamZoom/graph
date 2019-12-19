class CanvasGraph extends Graph{
    canvas:HTMLCanvasElement;
    constructor(canvas:HTMLCanvasElement){
        let ctx=canvas.getContext("2d");
        if(ctx==null){
            throw new Error("canvas can not support 2d");
        }
        super(new CanvasGraphContext(ctx,canvas.width,canvas.height));
        this.canvas=canvas;
        this.init();
    }

    init(){
        
        this.canvas.addEventListener("click",(e:MouseEvent)=>{
            let x = e.offsetX-this.canvas.width/2;
            let y = e.offsetY-this.canvas.height/2;
            this.shapes.map(s=>s.selected=false);

            let selected_shape:Shape|null=this.hit(x,y);    
            if(selected_shape!=null){
                selected_shape.selected=true;
            }
              
        });

        let mouse_down:any =null;
        let position:any=null;
        let selected_shape:Shape|null;
        this.canvas.addEventListener("mousedown",(e:any)=>{
            let x = e.offsetX-this.canvas.width/2;
            let y = e.offsetY-this.canvas.height/2;
            this.shapes.map(s=>s.selected=false);
            selected_shape=this.hit(x,y);    
            if(selected_shape!=null){
                selected_shape.selected=true;
                mouse_down = {x:e.offsetX,y:e.offsetY};
                position={x:selected_shape.x,y:selected_shape.y};     
            }     
        });
        this.canvas.addEventListener("mousemove",(e:any)=>{
            if(mouse_down && position && selected_shape!=null){
                let offset = {
                    x:e.offsetX-mouse_down.x,
                    y:e.offsetY-mouse_down.y
                };
                selected_shape.x=position.x+offset.x;
                selected_shape.y=position.y+offset.y;
            } 
        });
       
        this.canvas.addEventListener("mouseup",(e:any)=>{
            mouse_down=null;
            position = null;
            selected_shape=null;
        });
        
    }


}