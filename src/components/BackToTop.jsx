import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

function BackToTop() {
  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;