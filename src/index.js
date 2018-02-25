import Stage from 'core-components/Stage';
import SprightlyGentleman from 'song-sequences/SprightlyGentleman';
import bbStump from 'visual-components/bbStump/bbStump';
import './index.css';

const ContentStage = new Stage();
ContentStage.init();

const SG = new SprightlyGentleman();
SG.init();

const bbs = new bbStump();
bbs.init();
bbs.changeSprite('ramble'); 
