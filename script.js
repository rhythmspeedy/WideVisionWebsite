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

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const accordionContent = accordionItem.querySelector('.accordion-content');

      // Toggle the open state on the item and content
      accordionItem.classList.toggle('open');
      accordionContent.classList.toggle('open');
    });
  });
});

// Header shrink on scroll
const siteHeader = document.querySelector('.site-header');
const scrollThreshold = 35;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
}, { passive: true });
