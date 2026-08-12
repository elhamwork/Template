import { useCallback, useRef, useState } from "react";
import "./BeforeAfterSlider.css";

export default function BeforeAfterSlider({ before, after }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <div
      className="before-after"
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      <img className="before-after__image before-after__image--after" src={after.image} alt={after.label} loading="lazy" />
      <img
        className="before-after__image before-after__image--before"
        src={before.image}
        alt={before.label}
        loading="lazy"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <div
        className="before-after__handle"
        style={{ left: `${position}%` }}
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <span className="before-after__handle-grip" aria-hidden="true">
          ‹›
        </span>
      </div>

      <span className="before-after__tag before-after__tag--before">{before.label}</span>
      <span className="before-after__tag before-after__tag--after">{after.label}</span>
    </div>
  );
}
