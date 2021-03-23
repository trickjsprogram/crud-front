import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskStart, setEditTask } from "../redux/task.actions";
import Input from "./Input";

const TaskUpdate = ({ history, match }) => {
  const { editTask, loading } = useSelector((state) => ({ ...state.app }));
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setTask(editTask);
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    let slug = match.params.slug;
    if (task === editTask) {
      toast.error("Task are same. Update failed");
    } else {
      dispatch(setEditTask(task));
      dispatch(updateTaskStart({ slug, task }));
      toast.success(`${task} is update successfully`);
      history.push("/");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading..</h4>
          ) : (
            <h4>Update Task</h4>
          )}

          <Input handleSubmit={handleSubmit} task={task} setTask={setTask} />

          <hr />
        </div>
      </div>
    </div>
  );
};

export default TaskUpdate;
