import "./InputField.css";

const InputField = () => {
  return (
    <form className="input">
      <input className="input-box" type="text" placeholder="Enter a Task" />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
