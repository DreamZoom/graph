interface IGraphContext{  
      clear():void;
      drawRect(x:number,y:number,width:number,height:number,style:any):void; 
      drawImage(image:HTMLImageElement,x:number,y:number,width:number,height:number):void;
      drawLine(x1:number,y1:number,x2:number,y2:number,style:any):void;
      setShadow():void;
      clearShadow():void;
      draw(s:Shape):void;
}