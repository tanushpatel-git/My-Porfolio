import { useRef } from "react";

export default function MagneticLink({ children  }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out cursor-pointer"
    >
      {children}
    </div>
  );
}
