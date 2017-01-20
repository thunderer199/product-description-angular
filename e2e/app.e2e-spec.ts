import { TestLightItPage } from './app.po';

describe('test-light-it App', function() {
  let page: TestLightItPage;

  beforeEach(() => {
    page = new TestLightItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
