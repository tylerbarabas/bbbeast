import bg from 'img/bg.jpg';
import DomElement from './DomElement';

export default class Stage extends DomElement {

    constructor(){
        super();
        this.dom.id = 'content-stage';
        this.dom.setAttribute('style',`
            position: absolute;
            width: 1200px;
            background: url(${bg});
            background-size: 100% 100%;
            background-repeat: no-repeat; 
            height: 650px;
            overflow: hidden;
            visibility: hidden;
        `);

        this.overlay = document.createElement('DIV');
        this.overlay.id = 'overlay';
        this.overlay.setAttribute('style', `
            height: 100%;
            width: 100%;
            background-color: #000000;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        `);

        this.pageScale = 1;
    }

    init(){
        document.body.appendChild(this.dom);
        this.dom.appendChild(this.overlay);

        setTimeout(function(){
            this.resize();
            this.dom.style.visibility = 'visible';
            window.addEventListener('resize',this.resize.bind(this));
        }.bind(this),25);
    }

    resize(){
        let div_w = this.dom.clientWidth, div_h = this.dom.clientHeight;

        let scale_w = window.innerWidth / div_w;
        let scale_h = window.innerHeight / div_h;

        this.pageScale = Math.min(scale_w, scale_h);
        document.body.style.webkitTransform = 'scale(' + this.pageScale + ')';
        document.body.style.msTransform = 'scale(' + this.pageScale + ')';
        document.body.style.transform = 'scale(' + this.pageScale + ')';

        let move_x = ( window.innerWidth - this.dom.clientWidth * this.pageScale) / 2;
        let move_y = ( window.innerHeight - this.dom.clientHeight * this.pageScale) / 2;

        move_x = (move_x / this.pageScale) - 10;
        move_y = (move_y / this.pageScale) - 7;

        this.dom.style.top = move_y + 'px';
        this.dom.style.left = move_x + 'px';
    }

    showOverlay() {
        this.overlay.style.opacity = 1;
    }

    hideOverlay() {
        this.overlay.style.opacity = 0;
    }
}
