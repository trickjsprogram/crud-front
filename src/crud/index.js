import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createTask, getTasks, removeTask } from "./api";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Input from "./Input";

const TaskCreate = () => {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => getTasks().then((c) => setTasks(c.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    createTask({ task })
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setTask("");
        console.log("response", res);
        toast.success(`"${res.data.task}" is created`);
        loadTasks();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleRemove = async (slug) => {
    // let answer = window.confirm("Delete?");
    // console.log(answer, slug);
    if (window.confirm("Delete?")) {
      setLoading(true);
      removeTask(slug)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.task} deleted`);
          loadTasks();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  // step 4
  //   const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          {loading ? (
            <h4 className="text-danger">Loading..</h4>
          ) : (
            <h4>Create Task</h4>
          )}

          <Input handleSubmit={handleSubmit} task={task} setTask={setTask} />

          {/* step 5 */}

          {tasks.map((t) => (
            <div className="border row mx-2 align-items-center" key={t._id}>
              <ul className="list-group">
                <li className="list-group-item">{t.task}</li>
              </ul>

              <span
                onClick={() => handleRemove(t.slug)}
                className="btn btn-sm float-right"
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <Link to={`/update/${t.slug}`}>
                <span className="btn btn-sm float-right">
                  <EditOutlined className="text-warning" />
                </span>
              </Link>
            </div>
          ))}
          {/* {tasks.map((t) => (
            <Card
              type="inner"
              title={t.task}
              extra={
                <>
                  <span
                    onClick={() => handleRemove(t.slug)}
                    className="btn btn-sm float-right"
                  >
                    <DeleteOutlined className="text-danger" />
                  </span>
                  <Link to={`/update/${t.slug}`}>
                    <span className="btn btn-sm float-right">
                      <EditOutlined className="text-warning" />
                    </span>
                  </Link>
                </>
              }
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TaskCreate;
