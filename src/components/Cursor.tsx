import { useState, useEffect } from "react";

export const Cursor = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`text-3xl text-cursorColor transition-opacity ${visible ? "text-opacity-100" : "text-opacity-0"}`}
    >
      |
    </span>
  );
};
