class EventListener{
    name:string;
    call:Function;
    constructor(name:string,call:Function){
        this.name=name;
        this.call=call;
    }
}