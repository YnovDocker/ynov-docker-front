import { YnovDockerFrontPage } from './app.po';

describe('ynov-docker-front App', () => {
  let page: YnovDockerFrontPage;

  beforeEach(() => {
    page = new YnovDockerFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
