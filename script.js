
const donateButtons = document.querySelectorAll('.donate');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close_modal');

donateButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});