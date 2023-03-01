import "./index.css";

const Button = ({ text, clickFunc, isDisable = false }) => {
  return (
    <button
      className={`Button ${isDisable ? "disabled" : null}`}
      onClick={clickFunc}
      disabled={isDisable}
    >
      {text}
    </button>
  );
};

export default Button;
