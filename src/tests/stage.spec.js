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
