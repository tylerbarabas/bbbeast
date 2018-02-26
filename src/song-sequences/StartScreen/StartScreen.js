export default class StartScreen extends Sequence {
    init(){
        this.title = 'Start Screen';
        this.stage = window.stage;

        console.log('stage', this.stage);        
    }
}
