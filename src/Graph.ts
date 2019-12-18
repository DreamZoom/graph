class Graph{
    shaps:Array<Shape>;

    context:IGraphContext;

    constructor(context:IGraphContext){
        this.shaps=[];
        this.context =context;


        var render = ()=>{
            this.render();
            window.requestAnimationFrame(render);
        };
        render();
    }

    addShape(shape:Shape){
        this.shaps.push(shape);
    }

    removeShape(shape:Shape){
        
    }

    render(){
        
        this.shaps.map((shape)=>{
            shape.render(this.context);
        });
    }
}