import Sequence from '../../core-components/Sequence';
import Stage from '../../core-components/Stage';
import Audio from '../../snd/test.mp3';
import LoverImage from '../../visual-components/LoverImage/LoverImage';
import BlundrLogo from '../../visual-components/BlundrLogo/BlundrLogo';
import Yeh from '../../visual-components/Yeh/Yeh';
import Nah from '../../visual-components/Nah/Nah';

export default class Serious extends Sequence {
     init(){
        this.audioPath = Audio;
        this.title = 'Serious';
        super.init();

        this.stage = new Stage();
        this.blundrLogo = new BlundrLogo();
        this.yeh = new Yeh();
        this.nah = new Nah();
        this.loverImage = new LoverImage();
    } 
}
