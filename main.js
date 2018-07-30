const fullyContainer = document.querySelector('.fully-container');
const fullySections = fullyContainer.querySelectorAll('.fully-section');
const fullyDots = fullyContainer.querySelector('.fully-dots');
let flag = true;
let curSection = 1;

[...fullySections].forEach((section, counter = 0) => {
  section.setAttribute('data-section', ++counter);
  let fullyDot = `<button class="fully-dot" data-section-num="${counter}">Go to slide ${counter}</button>`
  fullyDots.innerHTML += fullyDot;
});

function changeSection(index) {
  if(index >= 1 && index <= fullySections.length) {
    fullyContainer.querySelector('.active-section').classList.remove('active-section');
    fullyContainer.querySelector(`[data-section="${index}"]`).classList.add('active-section');
    setDot(index);
  }
}

window.onload = () => {
  document.querySelector('[data-section="1"]').classList.add('active-section');
  document.addEventListener('click', (e) => {
    console.log('click');
    if(event.target.classList.contains('fully-dot')) {
      curSection = event.target.getAttribute('data-section-num');
      changeSection(curSection);
    }
  });
  document.addEventListener('wheel', (e) => {
    if(flag) {
      flag = false;
      curSection = activeSection();
      if(direction(e.deltaY) === 'forward') {
        changeSection(activeSection() + 1);
      } else {
        changeSection(activeSection() - 1);
      }
      setTimeout(()=> {
        flag = true;
      }, 1400);
    }
  });
  setDot(curSection);
}

function direction (delta) {
  if(delta < 0) {
    return 'forward'
  } else {
    return 'back'
  }
}

function activeSection() {
  return parseInt(document.querySelector('.active-section').getAttribute('data-section'));
}

function setDot(curSection) {
  const fullyDot = document.querySelectorAll('.fully-dot');
  [...fullyDot].forEach((item) => {
    if(item.getAttribute('data-section-num') == curSection) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Callbacks
function one() {
  console.log('one');
}
function two() {
  console.log('two');
}