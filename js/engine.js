class Engine {
    constructor(canvas, context, box_info = {width: 320, height: 240, aspect: 16/9}, lessons, options, max_prevtime, start_index){
        this.mouseup = true;
        this.index = start_index || 0;
        this.canvas = canvas;
        this.context = context;
        this.width = box_info.width;
        this.height = box_info.height;
        this.aspect = box_info.aspect;
        this.lessons = lessons;
        this.options = options;
        this.max_prevtime = max_prevtime || "Not Defined"
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.moveFN = "";
        this.object = []
        this.mouse_obj = {
            endLoc: 0
        }
        this.drawBoard()
        
        this.text()

        this.canvas.addEventListener("touchstart", (e) => {
            this.mouseStart(e)
        })
        this.canvas.addEventListener("touchend", (e) => {
            this.mouseEnd(e);
        })
        this.canvas.addEventListener("mousedown", (e) => {
            this.mouseStart(e)
        })
        this.canvas.addEventListener("mouseup", (e) => {
            this.mouseEnd(e);
        })

        this.object_to_move = "";
        this.object_to_move_index = 0
        this.not_won = false;
        this.color = "";
    }

    populateObject() {
        this.options[this.index].forEach((option, index) => {
            this.object.push(new Option_Box(this.context, option.text, option.size, option.x, option.y, option.index))
            this.object[index].draw()
        })
    }

    drawBoard() {
        this.wipeBoard();
    }

    wipeBoard() {
        this.context.fillStyle = "rgba(43, 64, 94, 1)"
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.fillStyle = "blue";
        this.context.fillRect(0, 0, this.width * 0.4, this.height * 0.1)
        this.context.fillStyle = "rgba(2, 48, 94, 0.4)"
        for (let i = 0; i < this.height / 80; i++) {
            this.context.fillRect(0, i * 80 - 15, this.width, 4)
        }
    }

    text() {
        this.color = this.colorRandom()
        let lastIndex = 0

        this.context.fillStyle = this.color;
        this.context.font = "44pt Arial";

        this.lessons[this.index].forEach((el, index) => {

            this.context.fillText(el, this.width / 2, 200 + (index * 80))
            lastIndex = index;
        })

       this.nextButton = new NextButton(this.context, "NEXT", 100, this.width / 2, (lastIndex + 1) * 80 + 200 )
       this.nextButton.draw()
    }

    colorRandom(){
        const colorBank = ["black", "red", "white", "deeppink", "lime", "brown", "tomato", "papayawhip", "yellow"]

        return colorBank[Math.floor(colorBank.length * Math.random())]
    }

    mouseStart(e) {
        this.mouseup = false;

        
        
        
        this.moveFN = (e, f) => {
            this.mouseMove(e, f)
        }

        let x_pos = (e.x / window.innerWidth) * this.width;
        let y_pos = (e.y / window.innerHeight) * this.height;

        if (e.type == "touchstart") {
            x_pos = (e.touches[0].clientX / window.innerWidth) * this.width;
            y_pos = (e.touches[0].clientY / window.innerHeight) * this.height;
        }

        this.mouse_obj.endLoc = {
            x: x_pos - 5,
            y: y_pos - 5,
            width: 10,
            height: 10
        }


        if (this.nextButton == null){
            this.object.forEach((obj, index) => {
                if (boxCollision(obj, this.mouse_obj.endLoc)) {
                    this.object_to_move = obj;
                    this.object_to_move_index = index;
                }
            })
        }


        this.canvas.addEventListener("mousemove", this.moveFN.bind(e, this))
        this.canvas.addEventListener("touchmove", this.moveFN.bind(e, this))

    }

    mouseEnd(e) {
        this.mouseup = true;

        if (this.object.length <= 0) {
            if (boxCollision(this.nextButton, this.mouse_obj.endLoc)) {
                this.nextButton = null;
                this.wipeBoard()
                this.populateObject()
                return   
            }
        }

        if (this.nextButton != null) {
            return
        }

        let x_pos = (e.x / window.innerWidth) * this.width;
        let y_pos = (e.y / window.innerHeight) * this.height;



        this.mouse_obj.endLoc = {
            x: x_pos,
            y: y_pos,
            width: 10,
            height: 10
        }
        
        this.object_to_move != ""? this.object[this.object_to_move_index] = this.object_to_move : null;

        this.object = this.object.sort((a, b) => a.y - b.y)

        this.not_won = false;

        this.object.forEach((obj, index) =>{
            if (obj.index != index) this.not_won = true
        })

        this.object_to_move = ""

        if (!this.not_won) {
            this.wipeBoard()
            this.index++;
            this.object = []
            this.text()
        }
    }

    mouseMove(f, e) {
    
        if (this.mouseup) return

        if (this.object.length <= 0) return

        let x_pos = (e.x / window.innerWidth) * this.width;
        let y_pos = (e.y / window.innerHeight) * this.height;

        if (e.type == "touchmove") {
            x_pos = (e.touches[0].clientX / window.innerWidth) * this.width;
            y_pos = (e.touches[0].clientY / window.innerHeight) * this.height;
        }

        if (this.object_to_move != "" ) {
            this.object_to_move.x += x_pos - this.mouse_obj.endLoc.x 
            this.object_to_move.y += y_pos - this.mouse_obj.endLoc.y 
            this.object_to_move.draw()
        }

        this.mouse_obj.endLoc = {
            x: x_pos,
            y: y_pos
        }

        this.wipeBoard()
        this.object.forEach(obj => {
            obj.draw()
        })
        // f.context.fillStyle = "blue";
        // f.context.fillRect(x_pos, y_pos, 40, 40);
        // f.context.fillStyle = "black";
    }
}


class Option_Box {
    constructor(context, text, size, x, y, index) {
        this.text = text;
        this.size = size;
        this.width = (this.size - 14) * this.text.length + 50; 
        this.height = this.size * 1.4;
        this.context = context;
        this.x = x;
        this.y = y;
        this.index = index;
    }

    draw() {
        this.context.fillStyle = "blue"
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = "white";
        this.context.font = "40pt Helvetica"
        this.context.fillText(this.text, this.x + this.width / 2, this.y + (this.size * 1.4 / 2)) 
    }
}

class NextButton{
    constructor(context, text, size, x, y) {
        this.text = text;
        this.size = 80;
        this.width = this.size * this.text.length;
        this.height = this.size * 1.4;
        this.context = context;
        this.x = x - this.width / 2;
        this.y = y - this.size / 2;
    }
    draw() {
        this.context.fillStyle = "tan";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = "blue"
        this.context.fillRect(this.x, this.y  + 15, this.width, this.height);
        this.context.fillStyle = "white"
        this.context.fillText(this.text, this.x + this.width / 2, this.y + this.size)
        this.context.fillStyle = "rgba(255, 255, 255, 0.3)"
        this.context.fillText(this.text, this.x + this.width / 2, this.y + this.size + 4)
    }
}

function boxCollision(a, b) {
    return (
        a.x + a.width >= b.x && b.x + b.width >= a.x && 
        a.y + a.height >= b.y && b.y + b.height >= a.y 
    )
}