import React, { useContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  },
};

const ThemeContext = React.createContext(themes.light);

const UseContextDemo = () => {
  const [count, setcount] = useState(0);
  return (
    <ThemeContext.Provider value={themes.dark}>
      <button onClick={() => setcount((preCount) => preCount + 1)}>
        increase {count}
      </button>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = (props) => {
  console.log("Toolbar");
  return <ThemeButton />;
};

const ThemeButton = () => {
  console.log("ThemeButton");
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      ThemeButton
    </button>
  );
};

export default UseContextDemo;
