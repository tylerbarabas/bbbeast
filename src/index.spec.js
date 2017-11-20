import Stage from './Stage';

const ContentStage = new Stage();
ContentStage.init();

test('Content stage should instantiate', () => {
	expect(ContentStage).toBeInstanceOf(Stage);
});

test('Content Stage should be appended to body', () => {
   expect(ContentStage).toHaveProperty('dom'); 
});
