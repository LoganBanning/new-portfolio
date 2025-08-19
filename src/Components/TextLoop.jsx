import { useEffect, useMemo, useState } from "react";

export default function TextLoop({ items = [], interval = 1500, className = "" }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => setI((v) => (v + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items, interval]);

  // Prevent layout shift by reserving space for the longest word/phrase
  const longest = useMemo(
    () => items.reduce((a, b) => (a?.length > b?.length ? a : b), ""),
    [items]
  );

  return (
    <span
      key={i} // re-trigger fade each change
      className={`lb-text-loop ${className}`}
      style={{ display: "inline-block", minWidth: `${longest.length}ch` }}
      aria-live="polite"
    >
      {items[i] || ""}
    </span>
  );
}
