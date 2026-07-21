'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let animId: number;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let glowX = 0, glowY = 0;

    const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const hovered = !!el.closest('button, a, input, textarea, [data-hover]');
      const dark = isDark();
      const baseRingColor = dark ? 'rgba(255,255,255,0.32)' : 'rgba(0,0,0,0.28)';
      const baseDotColor = dark ? '#ffffff' : '#09090b';
      if (ringRef.current) {
        ringRef.current.style.width = hovered ? '40px' : '28px';
        ringRef.current.style.height = hovered ? '40px' : '28px';
        ringRef.current.style.borderColor = hovered ? 'rgba(139,92,246,0.7)' : baseRingColor;
        ringRef.current.style.background = hovered ? 'rgba(139,92,246,0.08)' : 'transparent';
      }
      if (dotRef.current) {
        dotRef.current.style.background = hovered ? '#a78bfa' : baseDotColor;
        dotRef.current.style.boxShadow = hovered ? '0 0 10px rgba(139,92,246,0.9)' : (dark ? '0 0 6px rgba(255,255,255,0.5)' : '0 0 6px rgba(0,0,0,0.25)');
      }
    };

    const onDown = () => { if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(0.82)'; };
    const onUp = () => { if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'; };

    const animate = () => {
      if (dotRef.current) { dotRef.current.style.left = mouseX + 'px'; dotRef.current.style.top = mouseY + 'px'; }
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) { ringRef.current.style.left = ringX + 'px'; ringRef.current.style.top = ringY + 'px'; }
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      if (glowRef.current) { glowRef.current.style.left = glowX + 'px'; glowRef.current.style.top = glowY + 'px'; }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });
    window.addEventListener('mouseup', onUp, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="hidden md:block pointer-events-none">
      {/* Glow blob */}
      <div ref={glowRef} style={{
        position: 'fixed', width: '48px', height: '48px', borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(139,92,246,0.5) 0%,transparent 70%)',
        filter: 'blur(10px)', transform: 'translate(-50%,-50%)',
        zIndex: 9990, pointerEvents: 'none', willChange: 'left,top', opacity: 0.22,
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        position: 'fixed', width: '28px', height: '28px', borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.32)', background: 'transparent',
        transform: 'translate(-50%,-50%) scale(1)', zIndex: 9997, pointerEvents: 'none',
        willChange: 'transform,left,top',
        transition: 'width 0.2s, height 0.2s, border-color 0.2s, background 0.2s, transform 0.15s',
      }} />
      {/* Dot */}
      <div ref={dotRef} style={{
        position: 'fixed', width: '4px', height: '4px', borderRadius: '50%',
        background: '#ffffff', transform: 'translate(-50%,-50%)',
        zIndex: 9999, pointerEvents: 'none', willChange: 'left,top',
        boxShadow: '0 0 6px rgba(255,255,255,0.5)',
        transition: 'background 0.15s, box-shadow 0.15s',
      }} />
    </div>
  );
}
