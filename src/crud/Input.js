import React from "react";
import { useHistory } from "react-router-dom";
import { Input } from "antd";

const InputElement = ({ handleSubmit, task, setTask }) => {
  const history = useHistory();
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ width: "50%" }}
          autoFocus
          required
        />
        <br />
        <button className="btn btn-primary">Submit</button>
        <button className="btn btn-danger" onClick={() => history.push("/")}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default InputElement;
