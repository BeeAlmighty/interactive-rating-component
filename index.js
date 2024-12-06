const successMessage = document.getElementById('success--message');
const feedbackForm = document.getElementById('feedback-form');
const submitBtn = document.getElementById('submit-btn');
const ratings = document.querySelectorAll('.rating');
const selectedRating = document.getElementById('selection--rating');
let isClicked;
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  feedbackForm.style.display = 'none';
  successMessage.style.display = 'flex';
})

ratings.forEach(element => {
  element.addEventListener('click', (e) => {
      e.target.style.backgroundColor = 'hsl(0, 0%, 100%)';
      e.target.style.color = 'hsl(213, 19%, 18%)';
      selectedRating.innerText = e.target.innerText;
      isClicked = true;
  })
});