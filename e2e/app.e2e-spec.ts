import { LogisticaGalileoPage } from './app.po';

describe('logistica-galileo App', () => {
  let page: LogisticaGalileoPage;

  beforeEach(() => {
    page = new LogisticaGalileoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
