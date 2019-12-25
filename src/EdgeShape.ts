class EdgeShape extends Shape {
    from: NodeShape;
    to: NodeShape;
    constructor(from: NodeShape, to: NodeShape) {
        super();
        this.from = from;
        this.to = to;
    }



    distance(p1: any, p2: any): number {
        return Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2));
    }


    getLineFunction(p1: any, p2: any) {
        let a = (p2.y - p1.y) / (p2.x - p1.x);
        let b = p1.y - a * p1.x;
        return {
            xfunc: function (x: number) {
                return a * x + b;
            },
            yfunc: function (y: number) {
                return (y - b) / a;
            },
            a: a,
            b: b
        }
    }

    K(v: number): number {
        if (v > 0) return 1;
        if (v == 0) return 0;
        return -1;
    }

    getBestPoints(from: NodeShape, to: NodeShape) {


        let kx = this.K(to.x - from.x);
        let ky = this.K(to.y - from.y);

        let temp1: any = {};
        let temp2: any = {};

        if (kx == 0) {
            temp1 = { x: from.x, y: from.y + ky * from.height / 2 };
            temp2 = { x: to.x, y: to.y - ky * to.height / 2 };
        }
        else {
            let line = this.getLineFunction(this.from, this.to);
            let line_from = this.getLineFunction(this.from, { x: this.from.x + this.from.width / 2, y: this.from.y + this.from.height / 2 });
            let line_to = this.getLineFunction(this.to, { x: this.to.x + this.to.width / 2, y: this.to.y + this.to.height / 2 });

            if (Math.abs(line_from.a) >= Math.abs(line.a)) {
                temp1.x = from.x + kx * from.width / 2;
                temp1.y = line.xfunc(temp1.x);
            } else {
                temp1.y = from.y + ky * from.height / 2;
                temp1.x = line.yfunc(temp1.y);
            }

            if (Math.abs(line_to.a) >= Math.abs(line.a)) {
                temp2.x = this.to.x - kx * this.to.width / 2;
                temp2.y = line.xfunc(temp2.x);
            } else {
                temp2.y = this.to.y - ky * this.to.height / 2;
                temp2.x = line.yfunc(temp2.y);
            }

        }


        if (temp1.x > Math.max(from.x, to.x) || temp1.x < Math.min(from.x, to.x) || temp1.y > Math.max(from.y, to.y) || temp1.y < Math.min(from.y, to.y)) {
            temp1 = from;
        }
        if (temp2.x > Math.max(from.x, to.x) || temp2.x < Math.min(from.x, to.x) || temp2.y > Math.max(from.y, to.y) || temp2.y < Math.min(from.y, to.y)) {
            temp2 = to;
        }

        return [temp1, temp2];
    }

    doRender(context: IGraphContext) {

        let points = this.getBestPoints(this.from, this.to);


        context.drawLine(points[0].x, points[0].y, points[1].x, points[1].y, null);

    }
}