import Stage from '../core-components/Stage';

jest.useFakeTimers();

const ContentStage = new Stage();
ContentStage.init();

test('ContentStage should instantiate', () => {
    expect(ContentStage).toBeInstanceOf(Stage);
    expect(ContentStage).toHaveProperty('dom');
    expect(ContentStage).toHaveProperty('overlay');
});

test('ContentStage should be appended to body', () => {
    expect(document.body.children).toHaveProperty('content-stage');
    expect(ContentStage.dom.children).toHaveProperty('overlay');
});

test('ContentStage should resize with body', () => {
    let originalScale = ContentStage.pageScale;
    global.innerWidth = 2000;
    ContentStage.resize();
    expect(ContentStage.pageScale).toBeGreaterThan(originalScale);

    global.innerWidth = 200;
    ContentStage.resize();
    expect(ContentStage.pageScale).toBeGreaterThan(originalScale);
});

test('ContentStage should be visible after setTimeout', () => {
    jest.runAllTimers(); 
    expect(ContentStage.dom.style.visibility).toBe('visible');
});

test('ContentStage should set css transitions', ()=>{
    ContentStage.setTransition('100ms');
    expect(ContentStage.dom.style.transition).toBe('100ms');

    ContentStage.setTransition('200ms', true);
    expect(ContentStage.dom.style.transition).toBe('200ms');
    expect(ContentStage.overlay.style.transition).toBe('200ms');

    var elem1 = document.createElement('DIV');
    var elem2 = document.createElement('DIV');
    var elem3 = document.createElement('DIV');
    elem1.appendChild(elem2);
    elem2.appendChild(elem3);
    ContentStage.setTransition('300ms', true, elem1); 
    expect(elem1.style.transition).toBe('300ms');
    expect(elem2.style.transition).toBe('300ms');
    expect(elem3.style.transition).toBe('300ms');
});

test('ContentStage should set styles', ()=>{
    ContentStage.style('cursor', 'pointer');
    expect(ContentStage.dom.style.cursor).toBe('pointer');
});

test('ContentStage should have an overlay in it', ()=>{
    expect(ContentStage.dom.children).toHaveProperty('overlay');
});

test('ContentStage should be able to show overlay', ()=>{
    ContentStage.showOverlay();
    expect(ContentStage.overlay.style.opacity).toBe('1');
});

test('ContentStage should be able to hide overlay', ()=>{
    ContentStage.hideOverlay();
    expect(ContentStage.overlay.style.opacity).toBe('0');
});
