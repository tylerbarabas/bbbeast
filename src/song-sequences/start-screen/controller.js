import Sequence from 'bbcore/sequence';
import Stage from 'bbcore/stage';
import BG from '../../img/bg.jpg';
import SND from '../../snd/intro.mp3';
import DomElement from 'bbcore/dom-element';
import Instructions from './instructions.json';
import bbstumpGuitar from '../../visual-components/bbstump-guitar/controller';
import walkCycle from '../../visual-components/walk-cycle/controller';

export default class StartScreen extends Sequence {
    init(){
        this.stage = new Stage();
        this.stage.showOverlay();
        this.stage.setBackdrop(BG);
        this.hueRotate(150);
        this.audioPath = SND;

        this.bpm = 60;
        this.timeSignature = '4/4';
        this.instructions = Instructions;
        this.ap.dom.volume = 0.5;

        super.init();
    }

    onFileLoad(){
        super.onFileLoad();
        this.play();
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

    hideOverlay(){
        this.bbsg = new bbstumpGuitar();
        this.bbsg.changeSprite('meditate');
        this.bbsg.style({
            height: '300px',
            position: 'absolute',
            left: '100px',
            bottom: '0'
        });
        this.bbsg.setTransition('1s bottom');

        this.stage.setTransition('3s opacity', false, this.stage.overlay);
        this.stage.hideOverlay();
    }

    hueRotate(deg){
        this.stage.style('filter', 'hue-rotate('+deg+'deg)');
    }

    huepos1(){
        this.stage.setTransition('filter 0s');
        this.hueRotate(220);
    }

    huepos2(){
        this.stage.setTransition('filter 1s');
        this.hueRotate(150);
    }

    huepos3(){
        this.stage.setTransition('filter 0s');
        this.hueRotate(105);
    }

    hoverUp(){
        this.bbsg.style('bottom', '148px');
    }

    hoverDown(){
        this.bbsg.style('bottom', '140px');
    }
}
