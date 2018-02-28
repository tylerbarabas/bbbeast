import DomElement from './DomElement';

export default class Stage extends DomElement {
    constructor(){
        super();
        if (typeof window.stage !== 'undefined') return window.stage;
        this.dom.id = 'content-stage';
        this.dom.setAttribute('style',`
            position: absolute;
            width: 1200px;
            background-size: 100% 100%;
            background-repeat: no-repeat; 
            height: 650px;
            overflow: hidden;
            visibility: hidden;
        `);
        this.pageScale = 1;
        this.init();
    }

    init(){
        if ( typeof window.stage !== 'undefined' ) {
            throw 'Cannot init Stage, instance already exists.';
        }

        document.body.appendChild(this.dom);

        setTimeout(function(){
            this.resize();
            this.dom.style.visibility = 'visible';
            window.addEventListener('resize',this.resize.bind(this));
        }.bind(this),25);
        window.stage = this;
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

    setBackdrop(img){
        this.style('background-image',`url(${img})`)
    }

    setMasterFont(){
        document.body.style.fontFace = 'Catholic School Girl';
    }
}
