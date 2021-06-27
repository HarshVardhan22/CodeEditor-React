import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLight: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#fff", ui: "#333", bg: "#1B262C" },
    btnLight: { syntax: "white", bg: "#FF0000" },
    btnDark: { syntax: "#ddd", bg: "#1B262C" },
  };


  //function to switch themes
  ToggleTheme = () => this.setState({ isLight: !this.state.isLight });

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, ToggleTheme: this.ToggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
