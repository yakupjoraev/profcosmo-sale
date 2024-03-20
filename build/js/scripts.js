// Custom Scripts
// Custom scripts
function slider() {
  var swiper = new Swiper(".slider", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    // spaceBetween: 40,
    pagination: {
      el: ".slider__pagination",
      clickable: true,
    },
  });
}
if (window.matchMedia("(min-width: 768px)").matches) {
  slider();
}



const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});



