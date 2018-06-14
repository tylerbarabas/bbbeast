import Sequence from 'bbcore/sequence';
import Stage from 'bbcore/stage';
import BG from '../../img/bg.jpg';
import SND from '../../snd/intro.mp3';
import DomElement from 'bbcore/dom-element';
import Instructions from './instructions.json';
import bbstumpGuitar from '../../visual-components/bbstump-guitar-mouth/controller';
import Stump from '../../visual-components/stump/controller';
import Guitar from '../../visual-components/guitar/controller';


export default class StartScreen extends Sequence {
    init(){
        this.stage = new Stage();
        this.stage.showOverlay();
        this.stage.setBackdrop(BG);
        this.hueRotate(150);
        this.audioPath = SND;
        this.firstHoverDown = true;

        this.bpm = 60;
        this.timeSignature = '4/4';
        this.instructions = Instructions;
        this.ap.dom.volume = 0.5;

        this.onOverlayClick = this.onOverlayClick.bind(this);

        super.init();
    }

    onFileLoad(){
        super.onFileLoad();
        this.waitForClick();
    }

    waitForClick(){ 
        this.stage.overlay.style.color = "white";
        this.stage.overlay.style.textAlign = "center";
        this.stage.overlay.style.paddingTop = '300px';
        this.stage.overlay.style.fontSize = '30px';
        this.stage.overlay.innerText = "Touch to begin";
        this.stage.addEvent('click', this.onOverlayClick);
    }

    onOverlayClick(){
        this.play();
        this.stage.removeEvent('click',this.onOverlayClick);
    }

    createTitleMessage(){
        this.title = 'bbbbeast';
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
        this.titleMessage.appendTo();
    }

    playGuitar(){
        this.stump = new Stump();
        this.stump.init();

        this.bbsg = new bbstumpGuitar();
        this.bbsg.changeSprite('playGuitar');
        this.bbsg.style({
            height: '300px',
            position: 'absolute',
            left: '240px',
            bottom: '0'
        });
        this.bbsg.setTransition('2s bottom');
        this.bbsg.appendTo();
    }

    hideOverlay(){
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

    setGuitarDown(){
        this.bbsg.changeSprite('setGuitarDown');

        setTimeout(()=>{
            this.guitar = new Guitar();
            this.guitar.init();
        },400)
    }

    hoverUp(){
        this.bbsg.style('bottom', '148px');
    }

    hoverDown(){
        if (this.firstHoverDown) {
            this.bbsg.setTransition('1s bottom');
            this.firstHoverDown = false;
        }
        this.bbsg.style('bottom', '140px');
    }
}
