const fullyContainer = document.querySelector('.fully-container');
const fullySections = fullyContainer.querySelectorAll('.fully-section');
const fullyDots = fullyContainer.querySelector('.fully-dots');

[...fullySections].map((section, counter = 0) => {
  section.setAttribute('data-section', ++counter);
  let fullyDot = `<button class="fully-dot" data-section-num="${counter}">Go to slide ${counter}</button>`
  fullyDots.innerHTML += fullyDot;
});

function changeSection(index) {
  fullyContainer.querySelector('.active-section').classList.remove('active-section');
  fullyContainer.querySelector(`[data-section="${index}"]`).classList.add('active-section');
}

window.onload = () => {
  document.querySelector('[data-section="1"]').classList.add('active-section');
  document.addEventListener('click', (e) => {
    console.log('click');
    if(event.target.classList.contains('fully-dot')) {
      console.log(event.target.getAttribute('data-section-num'));
      changeSection(event.target.getAttribute('data-section-num'));
    }
  });
}