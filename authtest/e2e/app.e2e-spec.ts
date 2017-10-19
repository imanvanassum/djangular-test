import { AuthtestPage } from './app.po';

describe('authtest App', () => {
  let page: AuthtestPage;

  beforeEach(() => {
    page = new AuthtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
