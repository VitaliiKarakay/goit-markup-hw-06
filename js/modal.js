document.addEventListener('DOMContentLoaded', () => {
  const openModalButtons = document.querySelectorAll('[data-modal-open]');
  const closeModalButtons = document.querySelectorAll('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.add('is-open');
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.remove('is-open');
    });
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('is-open');
    }
  });
});