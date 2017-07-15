import { InvenventoryManagementAppPage } from './app.po';

describe('invenventory-management-app App', function() {
  let page: InvenventoryManagementAppPage;

  beforeEach(() => {
    page = new InvenventoryManagementAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
