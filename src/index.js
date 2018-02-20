import Stage from 'core-components/Stage';
import AudioPlayer from 'core-components/AudioPlayer';
import PlayPauseBtn from 'visual-components/PlayPauseBtn';
import './index.css';
import TestAudio from './snd/test.mp3';

const ContentStage = new Stage();
ContentStage.init();

const AP = new AudioPlayer();
AP.init();
AP.loadFile(TestAudio);

const PPBtn = new PlayPauseBtn();
PPBtn.init();
