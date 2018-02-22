import Sequence from '../core-components/Sequence';
import Instructions from './instructions.json';
import Audio from '../snd/test.mp3';

export default class SprightlyGentleman extends Sequence {
    init(){
        this.audioPath = Audio;
        this.title = 'Sprightly Gentleman';
        this.bpm = 105;
        this.timeSignature = '4/4';
        this.instructions = Instructions;
        super.init();
    }

    showDot(){
        console.log('showDot');
    }

    hideDot(){
        console.log('hideDot');
    } 
}
