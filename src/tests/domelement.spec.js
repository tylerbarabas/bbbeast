import DomElement from '../core-components/DomElement';

test('DomElement will instantiate', ()=>{
    let domelement = new DomElement();
    expect(domelement).toBeInstanceOf(DomElement);
});

test('DomElement should set css transitions', ()=>{
    let domelement = new DomElement();
    domelement.setTransition('100ms');
    expect(domelement.dom.style.transition).toBe('100ms');

    var child  = document.createElement('DIV');
    domelement.dom.appendChild( child );
    domelement.setTransition('200ms', true);
    expect(child.style.transition).toBe('200ms');

    var elem1 = document.createElement('DIV');
    var elem2 = document.createElement('DIV');
    var elem3 = document.createElement('DIV');
    elem1.appendChild(elem2);
    elem2.appendChild(elem3);
    domelement.setTransition('300ms', true, elem1); 
    expect(elem1.style.transition).toBe('300ms');
    expect(elem2.style.transition).toBe('300ms');
    expect(elem3.style.transition).toBe('300ms');
    expect(domelement.dom.style.transition).toBe('200ms');
});

test('DomElement should handle events', ()=>{
    let de1 = new DomElement();
    let de2 = new DomElement();
    let evttriggered = 0;
    let foobar = 0;

    let func = (e)=>{
        evttriggered++;

        expect(evttriggered).toBe(e.expectedValue);
    }

    de1.addEvent('evt-test', func);
    de2.dispatchEvent('evt-test',{ expectedValue: 1 });

    de1.removeEvent('evt-test', func);
    de2.dispatchEvent('evt-test', func);

    setTimeout(()=>{
        expect(evttriggered).toBe(2);
        expect(foobar).toBe(2);
    },1);
}); 
