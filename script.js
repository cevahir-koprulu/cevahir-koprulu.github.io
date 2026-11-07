const figureDialog = document.querySelector('#figure-dialog');
const figureImage = document.querySelector('#enlarged-figure');
const figureCaption = document.querySelector('#figure-caption');
const originalFigureLink = document.querySelector('#original-figure');

if (figureDialog && typeof figureDialog.showModal === 'function') {
  document.querySelectorAll('[data-figure]').forEach(link => {
    link.addEventListener('click', event => {
      // Keep ordinary links usable in new tabs and without JavaScript.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      figureImage.src = link.href;
      figureImage.alt = link.querySelector('img').alt;
      figureCaption.textContent = link.dataset.figure;
      originalFigureLink.href = link.href;
      figureDialog.showModal();
      document.body.classList.add('modal-open');
    });
  });
  document.querySelector('#close-figure').addEventListener('click', () => figureDialog.close());
  figureDialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
  figureDialog.addEventListener('click', event => {
    if (event.target !== figureDialog) return;
    const bounds = figureDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) figureDialog.close();
  });
}
