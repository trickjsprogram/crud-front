import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getTask, updateTask } from "./api";
import Input from "./Input";

const TaskUpdate = ({ history, match }) => {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTask();
  }, []);

  console.log("task", task);
  console.log("slug", match.params.slug);

  

  const loadTask = () =>
    getTask(match.params.slug).then((c) => setTask(c.data.task) );

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    updateTask(match.params.slug, { task })
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setTask("");
        toast.success(`"${res.data.task}" is updated`);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
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

          <Input
            handleSubmit={handleSubmit}
            task={task}
            setTask={setTask}
          />

          <hr />
        </div>
      </div>
    </div>
  );
};

export default TaskUpdate;
