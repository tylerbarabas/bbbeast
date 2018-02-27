import Serious from './song-sequences/Serious/Serious';
import './index.css';
import FONT from './fonts/catholic_school_girl/catholic_school_girl.ttf';
import GlobalStyle from './core-components/GlobalStyle'; 

new GlobalStyle(`
    @font-face{
        font-family: 'CSG';
        src: url(${FONT});
    }
    body {
        font-family: 'CSG';
    } 
`, true);

new Serious();
