import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    let animationFrameId: number;
    let currentX = mousePos.current.x;
    let currentY = mousePos.current.y;
    let rippleId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
      }
    };

    const render = () => {
        const { x, y } = mousePos.current;
        currentX += (x - currentX) * 0.2;
        currentY += (y - currentY) * 0.2;

        if (haloRef.current) {
            haloRef.current.style.transform = `translate3d(${currentX - 16}px, ${currentY - 16}px, 0)`;
        }
        animationFrameId = requestAnimationFrame(render);
    };

    const onMouseDown = (e: MouseEvent) => {
      const container = haloRef.current?.parentElement;
      if (!container) return;

      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX - 16}px;
        top: ${e.clientY - 16}px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.6);
        pointer-events: none;
        z-index: 51;
      `;
      
      container.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.style.transition = 'all 0.4s cubic-bezier(0.1, 0, 0.3, 1)';
        ripple.style.transform = 'scale(4)';
        ripple.style.opacity = '0';
        ripple.style.borderWidth = '0';
      });

      setTimeout(() => {
        ripple.remove();
      }, 450);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen">
      <div 
        ref={haloRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white/10 blur-[4px] will-change-transform"
      />
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-[4px] h-[4px] rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,1)] will-change-transform"
      />
    </div>
  );
}