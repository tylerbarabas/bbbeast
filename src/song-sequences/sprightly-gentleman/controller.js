import Sequence from 'bbcore/sequence';
import Instructions from './instructions.json';
import Audio from '../../snd/test.mp3';

import bbbeastAtTable from '../../visual-components/bbbeast-at-table/controller';
import kidsFacingForward from '../../visual-components/kids-facing-forward/controller';
import teacherPointingStick from '../../visual-components/teacher-pointing-stick/controller';
import backdropChalkboard from '../../visual-components/backdrop-chalkboard/controller';
import teacherThrowsBookBbbeast from '../../visual-components/teacher-throws-book-bbbeast/controller';
import teacherThrowsBookKids from '../../visual-components/teacher-throws-book-kids/controller';
import classroomDeskBbbeast from '../../visual-components/classroom-desk-bbbeast/controller';
import classroomDeskKid1 from '../../visual-components/classroom-desk-kid1/controller';
import classroomDeskKid2 from '../../visual-components/classroom-desk-kid2/controller';
import classroomTeacher1 from '../../visual-components/classroom-teacher1/controller';
import classroomTeacher2 from '../../visual-components/classroom-teacher2/controller';
import classroomTeacher3 from '../../visual-components/classroom-teacher3/controller';
import classroomTeacher4 from '../../visual-components/classroom-teacher4/controller';
import backdropTreehouseInside from '../../visual-components/backdrop-treehouse-inside/controller';

export default class SprightlyGentleman extends Sequence {
    init(){
        this.audioPath = Audio;
        this.title = 'Sprightly Gentleman';
        this.bpm = 105;
        this.timeSignature = '4/4';
        this.instructions = Instructions;
        super.init();

        this.bat = null;
    }

    onFileLoad(e){
        super.onFileLoad(e);
        this.play();
    } 

    shot01(){
//        this.bat = new bbbeastAtTable();
//        this.bat.changeSprite('default');

//        this.kff = new kidsFacingForward();
//        this.kff.changeSprite('default');

//        this.tps = new teacherPointingStick();
//        this.tps.changeSprite('default');

//        this.bcb = new backdropChalkboard();
//        this.bcb.init();

//        this.ttbb = new teacherThrowsBookBbbeast();
//        this.ttbb.changeSprite('default');

//        this.ttbk = new teacherThrowsBookKids();
//        this.ttbk.changeSprite('default');

//        this.cdb = new classroomDeskBbbeast();
//        this.cdb.init();

//        this.cdk1 = new classroomDeskKid1();
//        this.cdk1.init();

//        this.cdk2 = new classroomDeskKid2();
//        this.cdk2.init();

//        this.ct1 = new classroomTeacher1();
//        this.ct1.init();

//        this.ct2 = new classroomTeacher2();
//        this.ct2.init();

//        this.ct3 = new classroomTeacher3();
//        this.ct3.init();

//        this.ct4 = new classroomTeacher4();
//        this.ct4.init();

        this.bti = new backdropTreehouseInside();
        this.bti.init();
    }

    showDot(){
        console.log('showDot');
    }

    hideDot(){
        console.log('hideDot');
    } 
}
