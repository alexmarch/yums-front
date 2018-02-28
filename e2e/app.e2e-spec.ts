import { YumsPage } from './app.po';

describe('yums App', function() {
  let page: YumsPage;

  beforeEach(() => {
    page = new YumsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
