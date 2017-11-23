import 'latest-createjs';
const createjs = window.createjs;

export default class Stage {

    constructor(){
        createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);	
    }

    init(){
    }
}
