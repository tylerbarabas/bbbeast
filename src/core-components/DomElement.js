export default class DomElement {
    constructor(){
        this.dom = document.createElement('DIV');
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

    setTransition (transition,setChildren,element) {
        setChildren = setChildren || false;
        element = element || this.dom;

        element.style.transition = transition;
        element.style.WebkitTransition = transition;
        element.style.MozTransition = transition;

        if (!setChildren) return;

        let children = element.childNodes;
        for (let i=0;i<children.length;i++) {
            children[i].style.transition = transition;
            children[i].style.WebkitTransition = transition;
            children[i].style.MozTransition = transition;

            if (children[i].childNodes.length > 0) this.setTransition(transition,true,children[i]);
        }
    }

    style (attr,val) {
        this.dom.style[attr] = val;
    }

    appendTo( elem = document.body ) {
        elem.appendChild( this.dom );
    }
}
