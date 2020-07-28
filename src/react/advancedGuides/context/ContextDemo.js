import React, { Component } from "react";

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
const ThemeContext = React.createContext();
class ContextDemo extends Component {
  state = {
    currentTheme: themes.light,
  };
  toggleTheme = () => { 
    this.setState((preState) => ({currentTheme:preState.}))
  }
  render() {
    return (
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

class Toolbar extends Component {
  render() {
    return <ThemedButton />;
  }
}

class ThemedButton extends Component {
  render() {
    const theme = this.context;
    return (
      <ThemeContext.Consumer>
        <button
          style={{ background: theme.background, color: theme.foreground }}
          onClick={toggleTheme}
        >
          ThemedButton
        </button>
      </ThemeContext.Consumer>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ContextDemo;
