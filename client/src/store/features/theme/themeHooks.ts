import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "./themeSlice";
import { selectThemeMode } from "./themeSelectors";

export default function useTheme() {
  const dispatch = useDispatch();
  const mode = useSelector(selectThemeMode);

  return {
    mode,
    toggleTheme: () => dispatch(toggleTheme()),
    setTheme: (v: string) => dispatch(setTheme(v)),
  };
}
