import Stage from 'core-components/Stage';
import AudioPlayer from 'core-components/AudioPlayer';
import './index.css';
import TestAudio from './snd/test.mp3';

const ContentStage = new Stage();
ContentStage.init();

const AP = new AudioPlayer();
AP.addEvent('songLoaded', AP.play.bind(AP,'test'));
AP.loadFile(TestAudio, 'test');
