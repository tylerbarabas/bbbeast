import DomElement from '../../core-components/DomElement';
import IMG from '../../img/carlton.gif';
import IMG1 from '../../img/dateme.gif';

export default class LoverImage extends DomElement{
    constructor(){
        super();
        this.dom.id = 'lover-image';
        this.displayImage = null;
        this.init();
    }

    init(){
        this.style({
            margin: '0 auto',
            width: 'fit-content',
            height: 'fit-content',
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderRadius: '10px',
            cursor: 'pointer'
        });   
        this.displayImage = new DomElement('IMG');
        this.displayImage.dom.src = IMG;
        this.displayImage.style('height', `${window.innerHeight * 0.3}px`);
        this.displayImage.appendTo( this );
        this.appendTo();
        document.getElementById('yeh').addEventListener('click',this.togglePic.bind(this));
    }

    togglePic(){
        this.displayImage.dom.src = ('/'+this.displayImage.dom.src.split('/')[3] === IMG) ? IMG1 : IMG;
    }
}
