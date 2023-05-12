import { useMemo, useState } from "react";
import ToDoList from "./components/to-do-list";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./styles.css";

export default function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  const trocarTema = () => {
    if (mode === "dark") setMode("light");
    else setMode("dark");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <IconButton
          sx={{ ml: 1, alignSelf: "end" }}
          color="inherit"
          onClick={trocarTema}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <h1>ToDo List</h1>

        <ToDoList />
      </div>
    </ThemeProvider>
  );
}
