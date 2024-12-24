exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path === '/404/') {
    page.matchPath = '/*';
    createPage(page);
  }
};
