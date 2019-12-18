class Emiter{
    listeners:Array<EventListener>;
    constructor(){
        this.listeners = [];
    }

    addEventListener(name:string,callback:Function){
        this.listeners.push(new EventListener(name,callback));
    }
    removeEventListener(listener:EventListener){
        this.listeners = this.listeners.filter(item => item !== listener);
    }

    trigger(name:string,...args:any){
        this.listeners.map(item=>item.call.apply(this,args));
    }
}