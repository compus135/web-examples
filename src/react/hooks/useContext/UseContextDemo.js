import React, { useContext } from "react";

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
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = (props) => {
  return <ThemeButton />;
};

const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      ThemeButton
    </button>
  );
};

const ThemeButton2 = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <button
          style={{ background: theme.background, color: theme.foreground }}
        >
          ThemeButton
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

class ThemeButton3 extends React.Component {
  render() {
    let theme = this.context;
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        ThemeButton
      </button>
    );
  }
}
ThemeButton3.contextType = ThemeContext;

export default UseContextDemo;
