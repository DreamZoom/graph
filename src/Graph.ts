class Graph{
    shapes:Array<Shape>;

    context:IGraphContext;

    constructor(context:IGraphContext){
        this.shapes=[];
        this.context =context;


        var render = ()=>{
            this.render();
            window.requestAnimationFrame(render);
        };
        render();
    }

    addShape(shape:Shape){
        this.shapes.push(shape);
    }

    removeShape(shape:Shape){
        
    }

    render(){
        this.context.clear();
        this.shapes.map((shape)=>{
            shape.render(this.context);
        });
    }

    hit(x:number,y:number):Shape|null{
        for(var i=0;i<this.shapes.length;i++){
            if(this.shapes[i].hit(x,y)){
                return this.shapes[i];
            }
        }
        return null;
    }
}