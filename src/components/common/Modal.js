export function renderModal(Component) {
  const modal = document.getElementById('modal');
  modal.className = 'modal';
  modal.style = `width: 100%; height: 100%; position: fixed;`;
  modal.appendChild(Component);
  document.querySelector('body').style = 'overflow: hidden;';
  modal.onmousedown = (event) => {
    if (event.target === modal) {
      removeModal();
      modal.onmousedown = () => {};
    }
  };
}

export function removeModal() {
  const modal = document.getElementById('modal');
  modal.style = '';
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }
  document.querySelector('body').style = '';
}
