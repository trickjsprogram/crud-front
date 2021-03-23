import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  loadTaskStart,
  createTaskStart,
  setTaskEmpty,
  deleteTaskStart,
  setErrorMsgEmpty,
  setEditTask,
} from "../redux/task.actions";
import Input from "./Input";

const TaskCreate = () => {
  const {
    tasks,
    loading,
    error,
    errorMsg,
    taskName,
    deleteTaskName,
    editTask,
  } = useSelector((state) => ({
    ...state.app,
  }));
  const [task, setTask] = useState(taskName);
  // const [loading, setLoading] = useState(false);
  // const [tasks, setTasks] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (taskName) {
      toast.success(`${taskName} is created`);
      setTask("");
      dispatch(setTaskEmpty());
      loadTasks();
    } else if (deleteTaskName) {
      toast.success(`${deleteTaskName} is deleted`);
      setTask("");
      dispatch(setTaskEmpty());
      loadTasks();
    } else if (error && errorMsg) {
      toast.error(error);
      dispatch(setErrorMsgEmpty());
      setTask("");
    } else if (editTask) {
      loadTasks();
      dispatch(setTaskEmpty());
    }
  }, [taskName, error, deleteTaskName, editTask]);

  const loadTasks = () => {
    dispatch(loadTaskStart());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    let dupArray = [];
    if (tasks) {
      tasks.map((item) => {
        if (item.task === task) {
          toast.error(`${task} is already exists`);
          dupArray.push(item);
          setTask("");
        }
      });

      if (dupArray.length === 0) {
        dispatch(createTaskStart({ task }));
      }
    }
  };

  const handleRemove = async (slug) => {
    if (window.confirm("Delete?")) {
      dispatch(deleteTaskStart({ slug }));
    }
  };

  const handleEdit = (task) => {
    dispatch(setEditTask(task));
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
                  <EditOutlined
                    className="text-warning"
                    onClick={() => handleEdit(t.task)}
                  />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCreate;
