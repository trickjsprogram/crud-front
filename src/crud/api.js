import axios from "axios";

export const getTasks = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/tasks`);
};

export const getTask = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/task/${slug}`);
};

export const removeTask = async (slug) => {
  return await axios.delete(`${process.env.REACT_APP_API}/task/${slug}`);
};

export const updateTask = async (slug, task) => {
  return await axios.put(`${process.env.REACT_APP_API}/task/${slug}`, task);
};

export const createTask = async (task) => {
  return await axios.post(`${process.env.REACT_APP_API}/task/create`, task);
};