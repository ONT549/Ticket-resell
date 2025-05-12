// dropdown.js
document.addEventListener('DOMContentLoaded', () => {
  const expandButtons = document.querySelectorAll('.expand');
  expandButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sublist = button.nextElementSibling;
      if (sublist && sublist.classList.contains('sublist')) {
        sublist.style.display = sublist.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});
