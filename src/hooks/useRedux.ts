//redux
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import type { RootState, AppDispatch } from "../redux/store";
const useRedux = () => {
  const dispatch: AppDispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  return { dispatch, useAppSelector };
};

export { useRedux };
