import { NumerologyPage } from './app.po';

describe('numerology App', function() {
  let page: NumerologyPage;

  beforeEach(() => {
    page = new NumerologyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
