import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number; // 1 (near), 2 (mid1), 3 (mid2), 4 (far)
  r: number;
  opacity: number;
  opacitySpeed: number;
  vy: number;
  vx: number;
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const timeRef = useRef(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let stars: Star[] = [];

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars = [];
      const numStars = Math.floor((width * height) / 1200);
      
      for (let i = 0; i < numStars; i++) {
        const rand = Math.random();
        let z: number;
        if (rand < 0.08) z = 1;
        else if (rand < 0.25) z = 2;
        else if (rand < 0.5) z = 3;
        else z = 4;
        
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r: z === 1 ? (Math.random() * 1.5 + 0.8) : 
             z === 2 ? (Math.random() * 0.8 + 0.4) :
             z === 3 ? (Math.random() * 0.5 + 0.2) :
             (Math.random() * 0.3 + 0.1),
          opacity: Math.random() * 0.5 + 0.2,
          opacitySpeed: (Math.random() * 0.012 + 0.003) * (Math.random() < 0.5 ? 1 : -1),
          vy: z === 1 ? (0.15 + Math.random() * 0.1) :
              z === 2 ? (0.08 + Math.random() * 0.05) :
              z === 3 ? (0.04 + Math.random() * 0.03) :
              (0.01 + Math.random() * 0.01),
          vx: (Math.random() - 0.5) * 0.02 * (5 - z)
        });
      }

      for (let i = 0; i < Math.floor(numStars * 0.05); i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 1,
          r: Math.random() * 2.5 + 1.5,
          opacity: 0.15 + Math.random() * 0.15,
          opacitySpeed: (Math.random() * 0.006 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
          vy: 0.08 + Math.random() * 0.06,
          vx: (Math.random() - 0.5) * 0.015
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      timeRef.current += 0.016;
      
      const { x: mx, y: my } = mouseRef.current;

      stars.sort((a, b) => a.z - b.z);

      stars.forEach(star => {
        star.opacity += star.opacitySpeed;
        if (star.opacity <= 0.05 || star.opacity >= (star.z === 1 ? 0.9 : star.z === 2 ? 0.6 : star.z === 3 ? 0.4 : 0.25)) {
           star.opacitySpeed *= -1;
        }

        star.y -= star.vy;
        star.x += star.vx + Math.sin(timeRef.current * (0.5 + star.z * 0.2)) * 0.02 * (5 - star.z);
        
        if (star.y < -10) {
          star.y = height + 10;
          star.x = Math.random() * width;
        }
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;

        const dx = mx - star.x;
        const dy = my - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let offsetX = 0;
        let offsetY = 0;
        
        const maxDist = star.z === 1 ? 200 : star.z === 2 ? 150 : star.z === 3 ? 100 : 50;
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          offsetX = (dx / dist) * force * (5 - star.z) * 0.8;
          offsetY = (dy / dist) * force * (5 - star.z) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.r, 0, Math.PI * 2);
        
        const maxOp = star.z === 1 ? 0.9 : star.z === 2 ? 0.6 : star.z === 3 ? 0.4 : 0.25;
        const finalOpacity = Math.min(Math.max(star.opacity, 0.05), maxOp);
        
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.fill();
        
        if (star.z === 1) {
            ctx.shadowBlur = star.r * 3;
            ctx.shadowColor = `rgba(255, 255, 255, ${finalOpacity * 0.8})`;
        } else if (star.z === 2) {
            ctx.shadowBlur = star.r * 2;
            ctx.shadowColor = `rgba(200, 220, 255, ${finalOpacity * 0.6})`;
        } else {
            ctx.shadowBlur = 0;
        }
      });
      requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener('resize', init);
    return () => {
        window.removeEventListener('resize', init);
        window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
