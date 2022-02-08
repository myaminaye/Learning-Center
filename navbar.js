const navbar = document.querySelector('.navbar');
const searchBox = document.querySelector('.search-box .fa-search');
const btn = document.querySelector('.btn');

searchBox.addEventListener('click', () => {
  navbar.classList.toggle('showInput');

  if (navbar.classList.contains('showInput')) {
    searchBox.classList.replace('fa-search', 'fa-times');
  } else {
    searchBox.classList.replace('fa-times', 'fa-search');
  }
});

const profileBox = document.querySelector('.profile');
const downArrow = document.querySelector('.profile .fa-angle-down');

profileBox.addEventListener('click', () => {
  profileBox.classList.toggle('showProfileBox');

  if (profileBox.classList.contains('showProfileBox')) {
    downArrow.classList.replace('fa-angle-down', 'fa-angle-up');
  } else {
    downArrow.classList.replace('fa-angle-up', 'fa-angle-down');
  }
});
