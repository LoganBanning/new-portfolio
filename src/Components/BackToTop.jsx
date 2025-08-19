import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function BackToTop({ showUnder = 160 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > showUnder);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showUnder]);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        display: "grid",
        placeItems: "center",
        width: 44,
        height: 44,
        borderRadius: "9999px",
        border: "none",
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,.2)",
        cursor: "pointer"
      }}
      aria-label="Back to top"
    >
      <FiChevronUp />
    </button>
  );
}
