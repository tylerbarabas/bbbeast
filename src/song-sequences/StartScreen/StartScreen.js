import Sequence from '../../core-components/Sequence';
import Stage from '../../core-components/Stage';
import BG from '../../img/bg.jpg';
import SND from '../../snd/test.mp3';

export default class StartScreen extends Sequence {
    init(){
        this.title = 'Start Screen';
        this.stage = new Stage();
        this.stage.setBackdrop(BG);
        this.audioPath = SND;

        super.init();
    }
    onFileLoad(){
        super.onFileLoad();
//        this.play();
    }
}
