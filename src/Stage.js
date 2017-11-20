export default class Stage {
	constructor(){
		this.dom = document.createElement('DIV');
		this.dom.id = 'content-stage';
	}
	init(){
		document.body.appendChild(this.dom);
	}
}
