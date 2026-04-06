import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Squares = ({
  direction = "diagonal",
  speed = 1,
  borderColor = "#888",
  squareSize = 40,
  hoverFillColor = "#222",
}) => {
  const gridRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 🔹 viewport + buffer calculate
  const buffer = 400;
  const cols = Math.ceil((window.innerWidth + buffer) / squareSize);
  const rows = Math.ceil((window.innerHeight + buffer) / squareSize);
  const totalSquares = cols * rows;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let x = 0;
    let y = 0;

    const animate = () => {
      switch (direction) {
        case "right":
          x -= speed * 0.3;
          break;
        case "left":
          x += speed * 0.3;
          break;
        case "up":
          y += speed * 0.3;
          break;
        case "down":
          y -= speed * 0.3;
          break;
        case "diagonal":
          x -= speed * 0.25;
          y -= speed * 0.25;
          break;
        default:
          break;
      }

      gsap.set(grid, {
        x: x % squareSize,
        y: y % squareSize,
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [direction, speed, squareSize]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* GRID */}
      <div
        ref={gridRef}
        className="absolute"
        style={{
          inset: "-200px",
          width: "calc(100vw + 400px)",
          height: "calc(100vh + 400px)",
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
          gridAutoRows: `${squareSize}px`,
        }}
      >
        {Array.from({ length: totalSquares }).map((_, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              border: `1px solid ${borderColor}`,
              background:
                hoveredIndex === i ? hoverFillColor : "transparent",
            }}
            className="transition-colors duration-150"
          />
        ))}
      </div>

      {/* VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#060010_75%)]" />
    </div>
  );
};

export default Squares;
