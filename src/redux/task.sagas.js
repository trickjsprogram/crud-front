import { takeLatest, call, all, put, delay } from "redux-saga/effects";
import TaskActionTypes from "./task.types";

import {
  loadTaskSuccess,
  loadTaskFail,
  createTaskSuccess,
  createTaskFail,
  deleteTaskSuccess,
  deleteTaskFail,
  updateTaskSuccess,
  updateTaskFail,
} from "./task.actions";

import { getTasks, createTask, removeTask, updateTask } from "../crud/api";

export function* fetchTask() {
  try {
    delay(500);
    const response = yield call(getTasks, "");
    console.log("response-saga=>", response);
    yield put(loadTaskSuccess(response.data));
  } catch (error) {
    yield put(loadTaskFail(error.response.data));
  }
}

export function* createTaskAsync({ payload: { task } }) {
  try {
    const response = yield call(createTask, { task });
    if (response.status === 200 && response.status < 300) {
      yield put(createTaskSuccess(response.data.task));
    }
  } catch (error) {
    yield put(createTaskFail(error.response.data));
  }
}

export function* deleteTaskStartAsync({ payload: { slug } }) {
  try {
    const response = yield call(removeTask, slug);
    if (response.status === 200 && response.status < 300) {
      yield put(deleteTaskSuccess(response.data.task));
    }
  } catch (error) {
    yield put(deleteTaskFail(error.response.data));
  }
}

export function* updateTaskStartAsync({ payload: { slug, task } }) {
  try {
    const response = yield call(updateTask, slug, { task });
    if (response.status === 200 && response.status < 300) {
      yield put(updateTaskSuccess(response.data.task));
    }
  } catch (error) {
    yield put(updateTaskFail(error.response.data));
  }
}

export function* fetchTaskStart() {
  yield takeLatest(TaskActionTypes.LOAD_TASK_START, fetchTask);
}

export function* createTaskStart() {
  yield takeLatest(TaskActionTypes.CREATE_TASK_START, createTaskAsync);
}

export function* deleteTaskStart() {
  yield takeLatest(TaskActionTypes.DELETE_TASK_START, deleteTaskStartAsync);
}

export function* updateTaskStart() {
  yield takeLatest(TaskActionTypes.UPDATE_TASK_START, updateTaskStartAsync);
}

export default function* rootSaga() {
  yield all([
    call(fetchTaskStart),
    call(createTaskStart),
    call(deleteTaskStart),
    call(updateTaskStart),
  ]);
}
