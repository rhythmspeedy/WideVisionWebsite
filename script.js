document.addEventListener('DOMContentLoaded', () => {
  const hoverTargets = document.querySelectorAll('.nav-menu a, button, .button');

  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      target.classList.add('hover-active');
    });

    target.addEventListener('mouseleave', () => {
      target.classList.remove('hover-active');
    });

    target.addEventListener('focus', () => {
      target.classList.add('hover-active');
    });

    target.addEventListener('blur', () => {
      target.classList.remove('hover-active');
    });
  });
});
