import bg from 'img/bg.jpg';

export default class Stage {

    constructor(){
        this.dom = document.createElement('DIV');
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
        this.overlay.setAttribute('style', `
            height: 100%;
            width: 100%;
            background-color: #000000;
            opacity: 0.9;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        `);

        this.pageScale = 1;
    }

    init(){
        document.body.appendChild(this.dom);

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

        this.pageScale = Math.min(scale_w, scale_h) * 0.95;
        document.body.style.webkitTransform = 'scale(' + this.pageScale + ')';
        document.body.style.msTransform = 'scale(' + this.pageScale + ')';
        document.body.style.transform = 'scale(' + this.pageScale + ')';

        let move_x = ( window.innerWidth - this.dom.clientWidth * this.pageScale) / 2;
        let move_y = ( window.innerHeight - this.dom.clientHeight * this.pageScale) / 2;

        move_x = (move_x / this.pageScale);
        move_y = (move_y / this.pageScale) - 7;

        this.dom.style.top = move_y + 'px';
        this.dom.style.left = move_x + 'px';
    }

    setTransition (transition,setChildren,element) {
        setChildren = setChildren || false;
        element = element || this.dom;

        element.style.transition = transition;
        element.style.WebkitTransition = transition;
        element.style.MozTransition = transition;

        if (!setChildren) return;

        let children = element.childNodes;
        for (let i=0;i<children.length;i++) {
            children[i].style.transition = transition;
            children[i].style.WebkitTransition = transition;
            children[i].style.MozTransition = transition;

            if (children[i].childNodes.length > 0) this.setTransition(transition,true,children[i]);
        }
    }

    style (attr,val) {
        this.dom.style[attr] = val;
    }

    showOverlay() {
        this.overlay.style.opacity = 1;
    }

    hideOverlay() {
        this.overlay.style.opacity = 0;
    }
}
