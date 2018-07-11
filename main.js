const fullyContainer = document.querySelector('.fully-container');
const fullySections = fullyContainer.querySelectorAll('.fully-section');

[...fullySections].map((section, counter = 0) => {
  section.setAttribute('data-section', ++counter);
});

window.onload = () => {
  document.querySelector('[data-section="1"]').classList.add('active-section');
}