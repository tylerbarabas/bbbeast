import Sequence from 'bbcore/sequence';
import Stage from 'bbcore/stage';
import BG from '../../img/bg.jpg';
import SND from '../../snd/intro.mp3';
import DomElement from 'bbcore/dom-element';

export default class StartScreen extends Sequence {
    init(){
        this.title = 'The Legend of Bbbeast, Part one';
        this.stage = new Stage();
        this.stage.setBackdrop(BG);
        this.audioPath = SND;

        super.init();

        this.createTitleMessage();
    }

    onFileLoad(){
        super.onFileLoad();
        this.play();
    }

    createTitleMessage(){
        this.titleMessage = new DomElement();
        this.titleMessage.dom.innerText = this.title;
        this.titleMessage.style({
            width: 'fit-content',
            padding: '0 20px',
            lineHeight: '25px',
            margin: '20% auto',
            fontSize: '25px',
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderRadius: '30px'
        });
        this.titleMessage.appendTo( this.stage );
    }
}
