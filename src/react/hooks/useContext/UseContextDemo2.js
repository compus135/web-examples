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
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const toggleTheme = () => {
    if (currentTheme === themes.light) {
      setCurrentTheme(themes.dark);
    } else {
      setCurrentTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = (props) => {
  console.log("Toolbar");
  return <ThemeButton />;
};

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      style={{ background: theme.background, color: theme.foreground }}
      onClick={toggleTheme}
    >
      ThemeButton
    </button>
  );
};

export default UseContextDemo;
