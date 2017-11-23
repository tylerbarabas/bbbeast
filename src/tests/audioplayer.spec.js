import AudioPlayer from '../core-components/AudioPlayer';

const AP = new AudioPlayer();

test('AudioPlayer should instantiate', ()=>{
    expect(AP).toBeInstanceOf(AudioPlayer);
});
