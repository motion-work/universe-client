import { Universe.ClientPage } from './app.po';

describe('universe.client App', () => {
  let page: Universe.ClientPage;

  beforeEach(() => {
    page = new Universe.ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
