class Button {
    constructor(name){
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }

    onClick(fn){
        this.button.onclick = fn;
    }
}


class greenButton extends Button{

    constructor(name) {
        super(name);
        
    }
    
    onClick(fn){
        super.onClick (function() {
            this.button.style.background = "green";
            fn();
        }.bind(this));
    }
}

var bl = new greenButton('My Button 1');
bl.onClick(function(){
  console.log('clicked');
});