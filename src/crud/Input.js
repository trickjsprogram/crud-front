import React from "react";
import { Input, Button } from "antd";

const InputElement = ({ handleSubmit, task, setTask }) => (
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
      <button className="btn btn-danger" onClick={() => setTask("")}>
        Cancel
      </button>
    </div>
  </form>
);

export default InputElement;
