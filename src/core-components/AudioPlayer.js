import 'latest-createjs';
const createjs = window.createjs;

export default class AudioPlayer {

    constructor(){
        createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);	
        createjs.Sound.alternateExtensions = ['mp3'];
        this.loaded = false;
        this.playing = false;
        this.dom = document.createElement('DIV');
        this.currentAudio = {
            path: null,
            title: null
        };
    }

    loadFile(audioPath, title){
        createjs.Sound.registerSound(audioPath, title);
        createjs.Sound.on('fileload', this.onFileLoad, this);
        this.currentAudio.path = audioPath;
        this.currentAudio.title = title;
    }

    onFileLoad(){
        this.loaded = true;
        this.dispatchEvent('songLoaded',{path: this.currentAudio.path, title: this.currentAudio.title});
    }

    play(title){
        if (!this.loaded || this.playing) return;
        if (!this.cjs) {
            this.cjs = createjs.Sound.play(title);
        } else {
            this.cjs.play(title);
        }
        this.playing = true;
    }

    pause(){
        this.cjs.setPaused(true);
        this.playing = false;
    }

    stop(title){
        createjs.Sound.stop(title);
    }

    getPosition(){
        return this.cjs.getPosition();
    }

    setPosition(pos){
        this.cjs.setPosition(pos);
    }

    addEvent(evtName, func){
        this.dom.addEventListener(evtName,func);
    }

    removeEvent(evtName, func){
        this.dom.removeEventListener(evtName,func);
    }

    dispatchEvent(evtName, params){
        var evt = document.createEvent('Event');
        evt.initEvent(evtName,true,true);
        evt.params = params;
        this.dom.dispatchEvent(evt);
    }

    init(){
    }
}
