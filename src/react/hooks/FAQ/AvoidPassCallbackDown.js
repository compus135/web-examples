import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useContext,
  useReducer,
} from "react";

const App = () => {
  const [theme, setTheme] = useState("red");

  const handleChangeTheme = (theme) => {
    setTheme(theme);
  };
  return (
    <div>
      <button onClick={() => handleChangeTheme("yellow")}>changeTheme</button>
      <Toolbar theme={theme} onThemeChange={handleChangeTheme} />
    </div>
  );
};

const Toolbar = (props) => {
  return (
    <ThemeButton theme={props.theme} onThemeChange={props.onThemeChange} />
  );
};

const ThemeButton = (props) => {
  return (
    <div>
      <button
        onClick={() => props.onThemeChange("green")}
        style={{ background: props.theme }}
      >
        btn
      </button>
    </div>
  );
};
export default App;
