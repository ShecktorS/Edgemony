import "./index.css";

const PersonalTitle = ({ textContent }) => {
  return (
    <div className="PersonalTitle">
      <h1>Sezione: {textContent} </h1>
      <hr />
    </div>
  );
};

export default PersonalTitle;
