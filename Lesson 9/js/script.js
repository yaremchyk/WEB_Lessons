
class Button {
    constructor(width, height, content)
    {
        this.width = width;
        this.height = height;
        this.content = content;
    }

    showBtn() {
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px;">${this.content}</button>`);
    }
}
class BootstrapButton extends Button {
    constructor(width, height, content, color)
    {
        super(width, height, content)
        this.color = color;
    }

    showBtn() {
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px; color: ${this.color}">${this.content}</button>`);
    }
}

let width = +prompt('width')
let height = +prompt('height')
let content = string = prompt('content')
let color = string = prompt('color')

new BootstrapButton(width, height, content, color).showBtn();