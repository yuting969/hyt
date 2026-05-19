import { useEffect } from 'react';

export function useFadeIn() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.08
    };

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const index = Array.from(fadeElements).indexOf(element);
          setTimeout(() => {
            element.classList.add('in');
          }, index * 80);
        }
      });
    }, observerOptions);

    fadeElements.forEach((el) => {
      fadeObserver.observe(el);
    });

    return () => {
      fadeObserver.disconnect();
    };
  }, []);
}

export function useNavHighlight() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}