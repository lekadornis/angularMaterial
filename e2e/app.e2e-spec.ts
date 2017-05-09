import { CoursetroPage } from './app.po';

describe('coursetro App', () => {
  let page: CoursetroPage;

  beforeEach(() => {
    page = new CoursetroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
