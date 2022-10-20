import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
} from "./types";

export function incrementLike() {
  return {
    type: INCREMENT,
  };
}

export function decrementLike() {
  return {
    type: DECREMENT,
  };
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}
export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}

export function errorOn(text) {
  return dispatch => {
    dispatch({type: ERROR_DISPLAY_ON,
    text,});

    setTimeout(() =>{
      dispatch(errorOff())
    }, 2000)
  };
}

export function commentLoad() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      const data = await responce.json();
      dispatch({
        type: COMMENTS_LOAD,
        data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.message));
      dispatch(loaderOff());
      
    }
  };
}
