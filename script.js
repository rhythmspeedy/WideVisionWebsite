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
const parallaxLayers = document.querySelectorAll('.parallax-layer');

const updateParallax = () => {
  const scrollY = window.scrollY;

  parallaxLayers.forEach(layer => {
    const speed = parseFloat(layer.dataset.parallaxSpeed || '0.2');
    layer.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });
};

window.addEventListener('scroll', () => {
  if (siteHeader) {
    if (window.scrollY > scrollThreshold) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  const scrollOffset = window.scrollY * 0.08;
  document.querySelectorAll('.content-section').forEach((section, index) => {
    section.style.setProperty('--scroll-offset', (index % 2 === 0 ? 1 : -1) * scrollOffset);
  });

  updateParallax();
}, { passive: true });

updateParallax();
