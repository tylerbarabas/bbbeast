import Sequence from 'bbcore/sequence';
import Stage from 'bbcore/stage';
import BG from '../../img/bg.jpg';
import SND from '../../snd/intro.mp3';
import DomElement from 'bbcore/dom-element';
import Instructions from './instructions.json';

export default class StartScreen extends Sequence {
    init(){
        this.stage = new Stage();
        this.stage.setBackdrop(BG);
//        this.stage.setTransition('filter 500ms');
        this.audioPath = SND;

        this.bpm = 60;
        this.timeSignature = '4/4';
        this.instructions = Instructions;
        this.ap.dom.volume = 0.5;

        super.init();
    }

    onFileLoad(){
        super.onFileLoad();
 //       this.play();
    }

    createTitleMessage(){
        this.title = 'The Legend of Bbbeast';
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

    hueRotate(deg){
        this.stage.style('filter', 'hue-rotate('+deg+'deg)');
    }

    oddBeats(){
        let rand = Math.floor(Math.random() * 201);
        this.hueRotate(100+rand);
    }

    evenBeats(){
        this.hueRotate(100);
    }
}
