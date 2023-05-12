import ToDo from "./to-do";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function ToDoList() {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState("");
  const [msgErro, setMsgErro] = useState(false);

  const adicionar = () => {
    if (texto.trim() !== "") {
      // Verifica se o texto não está vazio ou contém apenas espaços em branco
      setLista([...lista, texto]);
      setTexto("");
    } else {
      setMsgErro(true);
    }
  };

  const excluir = (index) => {
    lista.splice();
    const novaLista = lista.filter((item, indice) => indice !== index);
    setLista(novaLista);
  };

  useEffect(() => {
    if (texto.trim() !== "") setMsgErro(false);
  }, [texto]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: 45,
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex"
          },
          "& > :last-child": {
            alignItems: "end",
            padding: "0 0 0 5px"
          }
        }}
      >
        {lista.map((item, indice) => (
          <ToDo key={indice} texto={item} excluir={() => excluir(indice)} />
        ))}

        {msgErro ? (
          <Alert
            sx={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
            severity="warning"
          >
            Digite uma tarefa
          </Alert>
        ) : null}
        <Paper elevation={2}>
          <TextField
            fullWidth
            placeholder="Digite aqui"
            inputProps={{
              maxLength: "45"
            }}
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
            variant="standard"
          />
          <IconButton color="success" onClick={adicionar}>
            <AddCircleIcon />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
}
