import Sequence from 'bbcore/sequence';
import Instructions from './instructions.json';
import Audio from '../../snd/test.mp3';

import bbbeastAtTable from '../../visual-components/bbbeast-at-table/controller';

export default class SprightlyGentleman extends Sequence {
    init(){
        this.audioPath = Audio;
        this.title = 'Sprightly Gentleman';
        this.bpm = 105;
        this.timeSignature = '4/4';
        this.instructions = Instructions;
        super.init();

        this.bat = null;
    }

    onFileLoad(e){
        super.onFileLoad(e);
        this.play();
    } 

    shot01(){
        this.bat = new bbbeastAtTable();
        this.bat.changeSprite('default');
    }

    showDot(){
        console.log('showDot');
    }

    hideDot(){
        console.log('hideDot');
    } 
}
