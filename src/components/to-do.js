import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDo({ texto, excluir }) {
  const [concluido, setConcluido] = useState(false);

  const concluidoClique = () => {
    setConcluido(!concluido);
  };

  return (
    <Paper
      sx={
        concluido
          ? {
              textDecoration: "line-through",
              color: "#2e7d32"
            }
          : {}
      }
      className="ToDo"
      elevation={2}
    >
      <Checkbox
        label="Concluído"
        color="success"
        checked={concluido}
        onClick={concluidoClique}
      />
      <span>{texto}</span>
      <IconButton aria-label="delete" color="error" onClick={excluir}>
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}
