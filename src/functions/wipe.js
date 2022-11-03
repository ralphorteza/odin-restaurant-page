const wipePage = () => {
  const content = document.querySelector('#content');
  content.style = '';

  while (content.children.length > 1) {
    content.children[1].remove();
  }
};

export default wipePage;