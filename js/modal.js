(() => {
    const refs = {
      openModalBtn: [...document.querySelectorAll('[data-modal-open]')],
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.forEach(e => {
      e.addEventListener('click', toggleModal);
    })
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  
  (() => {
  document.querySelector('.js-registration-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );
  });
})();