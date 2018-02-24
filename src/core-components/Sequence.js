import AudioPlayer from './AudioPlayer';

export default class Sequence {
    constructor() {
        this.title = null;
        this.audioPath = null;
        this.bpm = null;
        this.timeSignature = null;

        this.loaded = false;
        this.playing = false;

        this.time = {};
        this.songEvents = [];
        this.instructions = [];

        this.ap = new AudioPlayer();
        this.ap.init();
    }

    init() {
        this.ap.addEvent('song-loaded',this.onFileLoad.bind(this));
        this.ap.loadFile(this.audioPath);
    }

    onFileLoad(e) {
        this.loaded = true;
        this.calculateSubdivisions();
        this.registerSongEvents();
        this.play();
    }

    calculateSubdivisions() {
        let bpms = (60/this.bpm);
        this.time.quarterNote = this.time.beat = bpms;
        this.time.halfNote = this.time.quarterNote*2;
        this.time.wholeNote = this.time.halfNote*2;
        this.time.eighthNote = this.time.quarterNote/2;
        this.time.sixteenthNote = this.time.eighthNote/2;
        this.time.thirtySecondNote = this.time.sixteenthNote/2;
        this.time.eighthNoteTriplet = this.time.quarterNote/3;
        this.time.sixteenthNoteTriplet = this.time.eighthNoteTriplet/2;
        this.time.bar = parseInt(this.timeSignature.split('/')[0]) * this.time.quarterNote;
    }

    getTime(bar, beat) {
        return parseInt(((bar-1) * this.time.bar) + ((beat-1) * this.time.beat));
    }

    play() {
        this.playing = true;
        this.ticker = setInterval(this.tick.bind(this),1);
        this.ap.play(this.title);
    }

    pause() {
        this.playing = false;
        this.ap.pause();
        this.stopTicker();
    }

    tick() {
        if (this.songEvents.length === 0) {
            this.stopTicker();
            return;
        }

        this.position = this.getPosition();

        if (this.songEvents[0].pos <= this.position) {
            this.songEvents[0].func();
            this.songEvents.shift();
        }
    }

    stopTicker() {
        clearInterval(this.ticker);
    }

    addSongEvent( funcName, func, pos, rhythm, repeat, adjustment ) {
        if (typeof rhythm === 'object') {
            this.parseRhythm(funcName, pos, func,rhythm,repeat,adjustment);
            return;
        }

        pos += adjustment;
        if (pos < 0) pos = 0;
        this.songEvents.push({funcName: funcName, pos: pos, func: func});
    }

    registerSongEvents() {
        for (let i in this.instructions){
            if (typeof this[this.instructions[i][0]] === 'undefined') {
                console.error('Function ' + this.instructions[i][0] + ' not found. Skipping...');
                continue;
            }
            let func = this[this.instructions[i][0]].bind(this),
                funcName = this.instructions[i][0],
                time = this.instructions[i][1],
                rhythm = this.instructions[i][2] || false,
                repeat = this.instructions[i][3] || 0,
                adjustment = this.instructions[i][4] || 0;
            if (typeof time == 'object') {
                time = this.getTime(time.bar,time.beat);
            }
            this.addSongEvent(funcName,func,time,rhythm,repeat,adjustment);
        }
        this.songEvents.sort((x,y)=>{
            return x.pos - y.pos;
        });
    }

    parseRhythm(funcName, originalPos, func, rhythm, repeat, adjustment) {
        let addTime = originalPos;
        if (repeat > 0) {
            let entireRhythm = [];
            for (let i=0;i<=repeat;i++) {
                for (let x=0;x<rhythm.length;x++){
                    entireRhythm.push(rhythm[x]);
                }
            }	
            rhythm = entireRhythm;
        }
        if (typeof rhythm === 'object') {
            for (let i=0;i<rhythm.length;i++) {
                this.addSongEvent(funcName,func,addTime,false,0,adjustment);
                let current = rhythm[i].toLowerCase().split('');
                for (let j=0;j<current.length;j++) {
                    switch(current[j]) {
                        case 'b': addTime += this.time.bar;
                            break;
                        case 'w': addTime += this.time.wholeNote;
                            break;
                        case 'h': addTime += this.time.halfNote;
                            break;
                        case 'q': addTime += this.time.quarterNote;
                            break;
                        case 'e': addTime += this.time.eighthNote;
                            break;
                        case 's': addTime += this.time.sixteenthNote;
                            break;
                        case 't': addTime += this.time.thirtySecondNote;
                            break;
                        case 'z': addTime += this.time.eighthNoteTriplet;
                            break;
                        case 'x': addTime += this.time.sixteenthNoteTriplet;
                            break;
                    }
                }
            }
        }
    }

    addTime(note) {
        let value = 0;
        switch(note) {
            case 'b': value = this.time.bar;
              break;
            case 'w': value = this.time.wholeNote;
              break;
            case 'h': value = this.time.halfNote;
              break;
            case 'q': value = this.time.quarterNote;
              break;
            case 'e': value = this.time.eighthNote;
              break;
            case 's': value = this.time.sixteenthNote;
              break;
            case 't': value = this.time.thirtySecondNote;
              break;
            case 'z': value = this.time.eighthNoteTriplet;
              break;
            case 'x': value = this.time.sixteenthNoteTriplet;
              break;
        }
        return value;
    }

    stop() {
        this.playing = false;
        this.ap.stop();
    }

    getPosition() {
        return this.ap.getPosition();
    }

    setPosition(pos) {
        this.ap.setPosition(pos);
    }
}