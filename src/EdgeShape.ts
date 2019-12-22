class EdgeShape extends Shape {
    from: NodeShape;
    to: NodeShape;
    constructor(from: NodeShape, to: NodeShape) {
        super();
        this.from = from;
        this.to = to;
    }

    getBestPoint(points_1: Array<any>, points_2: Array<any>): Array<any> {

        let map: any = {};
        for (var i = 0; i < points_1.length; i++) {
            for (var j = 0; j < points_2.length; j++) {
                let distance = this.distance(points_1[i], points_2[j]);
                map[(i + "-" + j)] = { i, j, distance };
            }
        }

        let min = "";
        for (var k in map) {
            if (min == "") {
                min = k;
            }
            else {
                if (map[min].distance > map[k].distance) {
                    min = k;
                }
            }
        }

        if (min != "") {
            return [points_1[map[min].i], points_2[map[min].j]];
        }

        return [];
    }

    distance(p1: any, p2: any): number {
        return Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2));
    }


    getIntersectionPoint(p1: any, p2: any, p3: any, p4: any) {
        let b1 = (p2.y - p1.y) * p1.x + (p1.x - p2.x) * p1.y;
        let b2 = (p4.y - p3.y) * p3.x + (p3.x - p4.x) * p3.y;
        let D = (p2.x - p1.x) * (p4.y - p3.y) - (p4.x - p3.x) * (p2.y - p1.y);
        let D1 = b2 * (p2.x - p1.x) - b1 * (p4.x - p3.x);
        let D2 = b2 * (p2.y - p1.y) - b1 * (p4.y - p3.y);

        return { x: D1 / D, y: D2 / D };
    }

    getPoints(rect1: any, p1: any, p2: any) {
        let p3:any = {x:rect1.x,y:rect1.y};
        let p4:any = {x:rect1.x+rect1.width,y:rect1.y};
        let p = this.getIntersectionPoint(p1,p2,p3,p4);
    }

    getArc(p1: any, p2: any){
        let tan=(p2.y-p1.y)/(p2.x-p1.x);
        return Math.atan(tan);
    }

    render(context: IGraphContext) {
        let points_1 = this.from.getAnchorPoints();
        let points_2 = this.to.getAnchorPoints();
        let points = this.getBestPoint(points_1, points_2);
        if (points.length == 2) {
            context.drawLine(points[0].x, points[0].y, points[1].x, points[1].y, null);
        }

    }
}