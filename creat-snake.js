class Snake {
    constructor(x,y) {
        this.x= x;
        this.y= y;
        this.grid=24;
        this.dx=this.grid;
        this.dy=0;

    }
    update(){
        let img=document.getElementById('img-snake');
        let canvas=document.getElementById('mycanvas');
        let pen=canvas.getContext("2d")
        pen.drawImage(img, this.x, this.y);
    }
    move(){
        document.addEventListener('keydown', (e) => {
            if(e.which == 37){
                this.x +=this.grid;
            }

            else if(e.which == 38){
                this.y -=this.grid;
            }

            else if(e.which == 39){
                this.x -= this.grid;

            }

            else if(e.which == 40){
                this.y += this.grid;
            }
        });
    }

}