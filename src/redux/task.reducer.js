import TaskActionTypes from "./task.types";

const INITIAL_STATE = {
  taskName: "",
  deleteTaskName: "",
  editTask: "",
  tasks: [],
  error: false,
  errorMsg: "",
  loading: false,
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.LOAD_TASK_START:
    case TaskActionTypes.CREATE_TASK_START:
    case TaskActionTypes.DELETE_TASK_START:
    case TaskActionTypes.UPDATE_TASK_START:
      return {
        ...state,
        loading: true,
      };
    case TaskActionTypes.LOAD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case TaskActionTypes.SET_TASK_EMPTY:
      return {
        ...state,
        taskName: "",
        deleteTaskName: "",
        editTask: "",
      };
    case TaskActionTypes.SET_ERROR_MSG_EMPTY:
      return {
        ...state,
        error: false,
        errorMsg: "",
      };
    case TaskActionTypes.SET_EDIT_TASK:
      return {
        ...state,
        editTask: action.payload,
      };
    case TaskActionTypes.CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        taskName: action.payload,
      };
    case TaskActionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteTaskName: action.payload,
      };
    case TaskActionTypes.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        editTask: action.payload,
      };
    case TaskActionTypes.LOAD_TASK_FAIL:
    case TaskActionTypes.CREATE_TASK_FAIL:
    case TaskActionTypes.DELETE_TASK_FAIL:
    case TaskActionTypes.UPDATE_TASK_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
