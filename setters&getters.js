class Button {
    constructor(name){
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }

    set width(width){
        this.button.style.width = width + 'px';
    }
    set height(height){
        this.button.style.height = height + 'px';
    }

    get width(){
        return this.button.style.width;
    }
    get height(){
        return this.button.style.height;
    }
}


var bl = new Button('Click Me');
bl.width = 100;
bl.height = 100;


console.log(bl.width, bl.height);