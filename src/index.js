import GlobalStyle from 'bbcore/global-style';
import Stage from 'bbcore/stage';
import StartScreen from 'song-sequences/start-screen/controller';
import SprightlyGentleman from 'song-sequences/sprightly-gentleman/controller';
import FONT from './fonts/catholic_school_girl/catholic_school_girl.ttf';
import './index.css';

new GlobalStyle(`
    @font-face {
        font-family: 'CSG';
        src: url(${FONT});
    }
    body{
        font-family: 'CSG'
    }
`, true);

new Stage();
new StartScreen();
//new SprightlyGentleman();
