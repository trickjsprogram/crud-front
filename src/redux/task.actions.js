import TaskActionTypes from "./task.types";

export const loadTaskStart = () => ({
  type: TaskActionTypes.LOAD_TASK_START,
});

export const loadTaskSuccess = (tasks) => ({
  type: TaskActionTypes.LOAD_TASK_SUCCESS,
  payload: tasks,
});

export const loadTaskFail = (errorMsg) => ({
  type: TaskActionTypes.LOAD_TASK_FAIL,
  payload: errorMsg,
});

export const createTaskStart = (taskDetail) => ({
  type: TaskActionTypes.CREATE_TASK_START,
  payload: taskDetail,
});

export const createTaskSuccess = (task) => ({
  type: TaskActionTypes.CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFail = (errorMsg) => ({
  type: TaskActionTypes.CREATE_TASK_FAIL,
  payload: errorMsg,
});

export const deleteTaskStart = (taskDetail) => ({
  type: TaskActionTypes.DELETE_TASK_START,
  payload: taskDetail,
});

export const deleteTaskSuccess = (task) => ({
  type: TaskActionTypes.DELETE_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskFail = (errorMsg) => ({
  type: TaskActionTypes.DELETE_TASK_FAIL,
  payload: errorMsg,
});

export const updateTaskStart = (taskDetail) => ({
  type: TaskActionTypes.UPDATE_TASK_START,
  payload: taskDetail,
});

export const updateTaskSuccess = (task) => ({
  type: TaskActionTypes.UPDATE_TASK_SUCCESS,
  payload: task,
});

export const updateTaskFail = (errorMsg) => ({
  type: TaskActionTypes.UPDATE_TASK_FAIL,
  payload: errorMsg,
});

export const setTaskEmpty = () => ({
  type: TaskActionTypes.SET_TASK_EMPTY,
});

export const setErrorMsgEmpty = () => ({
  type: TaskActionTypes.SET_ERROR_MSG_EMPTY,
});

export const setEditTask = (task) => ({
  type: TaskActionTypes.SET_EDIT_TASK,
  payload: task,
});
