document.addEventListener('DOMContentLoaded', () => {

  let pictures = document.querySelectorAll('.picture');
  let modal = document.querySelector('#modal');
  let modalWrapper = document.querySelector('#modal-wrapper');

  [].forEach.call(pictures, (el, i, arr) => {
    el.addEventListener('click', () => {
      modal.innerHTML = el.outerHTML;
      modalWrapper.style.display = 'flex';
    });
  });

  modalWrapper.addEventListener('click', (e) => {
    modalWrapper.style.display = 'none';
  })

});
