import DomElement from '../core-components/DomElement';

export default class PlayPauseBtn extends DomElement {
    constructor(){
        super();
        this.dom = null;
    }

    init(){
        this.dom = document.createElement('DIV');
        this.dom.id = 'play-pause-btn';
        this.dom.className = 'fa fa-play';
        this.style('position', 'absolute');
        this.style('z-index', '9999');
        this.style('top', '50px');
        this.style('left', '50px');
        this.style('height', '20px');
        this.style('width', '20px');
        this.style('background-color', 'red');
        this.appendTo();

        this.addEvent('click', this.togglePlayPause.bind(this));
    }

    togglePlayPause(){
        console.log('click');
        if (window.AP.playing)
            window.AP.pause();
        else
            window.AP.play();
    }
}
