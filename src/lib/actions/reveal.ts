// Fades an element in once when it scrolls into view. Styling lives in app.css
// (.reveal / .is-visible) and only hides content once the page has the `js` class.

let observer: IntersectionObserver | undefined;

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );
  return observer;
}

export function reveal(node: HTMLElement, delay = 0) {
  node.classList.add('reveal');
  if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);

  if (typeof IntersectionObserver === 'undefined') {
    node.classList.add('is-visible');
    return {};
  }

  getObserver().observe(node);
  return {
    destroy() {
      observer?.unobserve(node);
    }
  };
}
