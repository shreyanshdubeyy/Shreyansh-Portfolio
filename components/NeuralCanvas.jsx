import { useEffect, useRef } from "react";

export default function NeuralCanvas() {
  const ref = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const wrapper = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h;
    let nodes = [];
    const MOUSE_RADIUS = 290;

    function resize() {
  w = canvas.offsetWidth;
  h = canvas.offsetHeight;
  canvas.width = w * devicePixelRatio;
  canvas.height = h * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

  // Increased particle density
  const count = Math.floor((w * h) / 12000);

  nodes = Array.from(
    { length: Math.max(35, Math.min(count, 150)) },
    () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.8 + 0.7,
    })
  );
}

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    }
    function onLeave() {
      mouse.current.active = false;
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      const m = mouse.current;

      for (const n of nodes) {
        if (m.active) {
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_RADIUS && d > 0.01) {
            const force = (1 - d / MOUSE_RADIUS) * 0.6;
            n.x += (dx / d) * force;
            n.y += (dy / d) * force;
          }
        }
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 190) {
  ctx.strokeStyle = `rgba(79, 216, 196, ${0.18 * (1 - d / 190)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (m.active) {
        for (const n of nodes) {
          const d = Math.hypot(n.x - m.x, n.y - m.y);
          if (d < MOUSE_RADIUS) {
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.5 * (1 - d / MOUSE_RADIUS)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(m.x, m.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(79, 216, 196, 0.9)";
        ctx.fill();
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167, 139, 250, 0.55)";
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);
    wrapper.addEventListener("mousemove", onMove);
    wrapper.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      wrapper.removeEventListener("mousemove", onMove);
      wrapper.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
    />
  );
}
