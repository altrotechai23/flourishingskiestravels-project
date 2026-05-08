"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterEffectProps {
  /** Array of strings to cycle through */
  words: string[];
  /** Milliseconds per character while typing (default: 60) */
  typeSpeed?: number;
  /** Milliseconds per character while deleting (default: 30) */
  deleteSpeed?: number;
  /** Milliseconds to pause at end of each word (default: 1800) */
  pauseDuration?: number;
  /** Whether to loop indefinitely (default: true) */
  loop?: boolean;
  /** Tailwind class(es) for the text (default: "") */
  className?: string;
  /** Show blinking cursor (default: true) */
  showCursor?: boolean;
  /** Custom cursor character (default: "|") */
  cursorChar?: string;
}

export function TypewriterEffect({
  words,
  typeSpeed = 60,
  deleteSpeed = 30,
  pauseDuration = 1800,
  loop = true,
  className = "",
  showCursor = true,
  cursorChar = "|",
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const charIndex = useRef(0);

  // Cursor blink
  useEffect(() => {
    if (!showCursor) return;
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(blink);
  }, [showCursor]);

  // Typewriter logic
  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        charIndex.current += 1;
        setDisplayText(currentWord.slice(0, charIndex.current));

        if (charIndex.current >= currentWord.length) {
          setIsDeleting(true);
          timer.current = setTimeout(tick, pauseDuration);
          return;
        }
        timer.current = setTimeout(tick, typeSpeed);
      } else {
        charIndex.current -= 1;
        setDisplayText(currentWord.slice(0, charIndex.current));

        if (charIndex.current <= 0) {
          setIsDeleting(false);
          const nextIndex = wordIndex + 1;
          if (!loop && nextIndex >= words.length) return;
          setWordIndex(nextIndex % words.length);
          timer.current = setTimeout(tick, 400);
          return;
        }
        timer.current = setTimeout(tick, deleteSpeed);
      }
    };

    timer.current = setTimeout(tick, typeSpeed);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordIndex, isDeleting]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span
          style={{ opacity: cursorVisible ? 1 : 0, transition: "opacity 0.1s" }}
          aria-hidden="true"
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}
