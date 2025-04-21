// src/lib/actions/scrollAnimation.ts
export function scrollAnimation(
    node: HTMLElement,
    { threshold = 0.1, once = true } = {}
  ) {
    // start hidden + slightly translated down
    node.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-700', 'ease-out');
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('opacity-100', 'translate-y-0');
          node.classList.remove('opacity-0', 'translate-y-4');
          if (once) observer.unobserve(node);
        }
      },
      { threshold }
    );
  
    observer.observe(node);
  
    return {
      destroy() {
        observer.disconnect();
      }
    };
  }
  