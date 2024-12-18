"use client";
import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  const typingText = "What does my mind need to thrive, not just survive?";

  // Split text into letters
  const letters = typingText.split("");

  const [hoverMotion, setHoverMotion] = React.useState(false);

  const handleHover = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!hoverMotion) {
      setHoverMotion(true);
    }
  };

  return (
    <div className="my-4 px-10 py-10 max-container flex-col text-center">
      <ul className="text-xl py-5 md:px-2">
        In today&#39;s fast-paced world, mental and emotional self-neglect has
        become an invisible epidemic. Many of us sacrifice self-awareness and
        mindfulness in the pursuit of societal success, all while overlooking
        the quiet warning signs of inner turmoil. Overthinking, suppressed
        emotions, and the unchecked spiral of negative thought loops feed into
        cycles of anxiety and self-doubt, leaving us disconnected from ourselves
        and others.
      </ul>
      <ul className="text-xl py-5">How often do we truly pause and ask,</ul>
      <ul
        onMouseEnter={handleHover}
        className="text-xl bg-blue-500 inline rounded-md p-1"
      >
        &#34;
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0 }}
            animate={hoverMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.03, duration: 0.2 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
        &#34;
      </ul>
    </div>
  );
};

export default Introduction;
