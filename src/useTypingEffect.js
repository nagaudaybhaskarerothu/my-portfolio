
import { useEffect, useState } from "react";

const useTypingEffect = (
  words,
  typingSpeed = 90,
  deletingSpeed = 45
) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && text === currentWord) {
      delay = 1400;
    }

    if (isDeleting && text === "") {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((previous) => (previous + 1) % words.length);
      } else if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed]);

  return text;
};

export default useTypingEffect;
