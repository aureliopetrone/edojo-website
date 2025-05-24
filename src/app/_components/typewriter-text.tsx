"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  phrases: { first: string; second: string }[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  phrases,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSecondPart, setIsSecondPart] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex];
    if (!currentPhrase) return;

    const fullText = currentPhrase.first + " " + currentPhrase.second;
    const firstPartLength = currentPhrase.first.length;

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        // Cancellazione carattere per carattere
        if (currentText.length > 0) {
          const newText = currentText.slice(0, -1);
          setCurrentText(newText);
          // Controlla se siamo tornati alla prima parte
          if (newText.length <= firstPartLength) {
            setIsSecondPart(false);
          }
        } else {
          // Finito di cancellare, passa alla frase successiva
          setIsDeleting(false);
          setIsSecondPart(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Scrittura carattere per carattere
        if (currentText.length < fullText.length) {
          const newText = fullText.slice(0, currentText.length + 1);
          setCurrentText(newText);
          // Controlla se siamo passati alla seconda parte
          if (newText.length > firstPartLength) {
            setIsSecondPart(true);
          }
        } else {
          // Finito di scrivere, pausa prima di cancellare
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentPhraseIndex,
    isDeleting,
    isPaused,
    isSecondPart,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  if (phrases.length === 0) return null;

  const currentPhrase = phrases[currentPhraseIndex];
  if (!currentPhrase) return null;
  
  const firstPartLength = currentPhrase.first.length;
  
  // Dividi il testo corrente in due parti
  const firstPart = currentText.slice(0, Math.min(currentText.length, firstPartLength));
  const secondPart = currentText.length > firstPartLength ? currentText.slice(firstPartLength + 1) : "";

  return (
    <span className={className}>
      <span className="text-neutral-900">
        {firstPart}
        {!secondPart && <span className="animate-pulse text-neutral-900">|</span>}
      </span>
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 min-h-[1.2em]">
        {secondPart && (
          <>
            {secondPart}
            <span className="animate-pulse text-primary-600">|</span>
          </>
        )}
      </span>
    </span>
  );
} 