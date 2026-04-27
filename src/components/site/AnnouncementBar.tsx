import { useEffect, useState } from "react";
import { X } from "lucide-react";

const messages = [
  "Free overnight shipping on orders over $99.",
  "Skagit Valley Tulip Festival tickets — April 1 to April 30, 2026.",
  "Spring blooms ship through May 15. Order by Sunday for Wednesday delivery.",
];

export function AnnouncementBar() {
  const [i, setI] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % messages.length), 6500);
    return () => clearInterval(t);
  }, []);

  if (hidden) return null;
  return (
    <div className="bg-cream-100 text-foreground border-b border-anchor/10">
      <div className="container-page flex items-center justify-center gap-4 py-2.5 text-[13px]">
        <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
        <p key={i} className="text-center reveal" style={{ animationDuration: ".7s" }}>
          {messages[i]}
        </p>
        <button
          aria-label="Dismiss"
          onClick={() => setHidden(true)}
          className="ml-auto text-ink-500 hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
