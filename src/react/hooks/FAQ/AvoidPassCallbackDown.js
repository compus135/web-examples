import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useContext,
  useReducer,
} from "react";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return action.payload;

    default:
      break;
  }
  return state;
};
const ThemeDispatch = React.createContext(null);
const App = () => {
  const [theme, dispatch] = useReducer(themeReducer, "red");

  const handleChangeTheme = (theme) => {
    dispatch({ type: "change", payload: theme });
  };
  return (
    <div>
      <button onClick={() => handleChangeTheme("yellow")}>changeTheme</button>
      <ThemeDispatch.Provider value={dispatch}>
        <Toolbar theme={theme} />
      </ThemeDispatch.Provider>
    </div>
  );
};

const Toolbar = (props) => {
  return <ThemeButton theme={props.theme} />;
};

const ThemeButton = (props) => {
  const dispatch = useContext(ThemeDispatch);
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "change", payload: "green" })}
        style={{ background: props.theme }}
      >
        btn
      </button>
    </div>
  );
};
export default App;
