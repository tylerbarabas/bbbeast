import Sequence from '../../core-components/Sequence';
import Stage from '../../core-components/Stage';
import Audio from '../../snd/test.mp3';
import LoverImage from '../../visual-components/LoverImage/LoverImage';

export default class Serious extends Sequence {
     init(){
        this.audioPath = Audio;
        this.title = 'Serious';
        super.init();

        this.stage = new Stage();

        this.loverImage = new LoverImage();
        this.loverImage.appendTo( this.stage );
    } 
}
