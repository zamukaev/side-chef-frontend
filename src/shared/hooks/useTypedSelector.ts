import { TypedUseSelectorHook, useSelector } from "react-redux";

import { TypeRootState } from "app/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
