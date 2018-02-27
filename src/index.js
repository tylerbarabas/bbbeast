import GlobalStyle from 'core-components/GlobalStyle';
import Stage from 'core-components/Stage';
import StartScreen from 'song-sequences/StartScreen/StartScreen';
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
new StartScreen();
