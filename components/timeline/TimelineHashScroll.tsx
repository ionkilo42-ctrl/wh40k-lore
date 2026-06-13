"use client";

import { useEffect } from "react";

export function TimelineHashScroll() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const scrollToEvent = () => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    const timeout = window.setTimeout(scrollToEvent, 120);
    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}