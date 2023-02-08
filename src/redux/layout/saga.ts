// @flow
import { all, call, fork, takeEvery } from "redux-saga/effects";

import { LayoutActionTypes } from "./types";
import { LAYOUT_MODES } from "../../constants/index";

/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute: any, value: any) {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
}

/**
 * Changes the layout mode
 * @param {*} param0
 */
 function* changelayoutMode({ payload: { layoutMode } } : any) {
  try {
    if (layoutMode === LAYOUT_MODES.LIGHT) {
      yield call(changeBodyAttribute, "data-layout-mode", layoutMode);
      localStorage.setItem("layoutMode", layoutMode);
    } else if (layoutMode === LAYOUT_MODES.DARK) {
      yield call(changeBodyAttribute, "data-layout-mode", layoutMode);
      localStorage.setItem("layoutMode", layoutMode);
    }
  } catch (error) { }
}

/**
 * Watchers
 */
export function* watchChangelayoutMode() {
  yield takeEvery(LayoutActionTypes.CHANGE_LAYOUT_MODE, changelayoutMode);
}

function* LayoutSaga() {
  yield all([
    fork(watchChangelayoutMode),
  ]);
}

export default LayoutSaga;
