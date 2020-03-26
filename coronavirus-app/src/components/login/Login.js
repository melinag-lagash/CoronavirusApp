import React, { useState } from "react";
import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import Header from "../header/Header";
import useStyles from "./Styles";

const Login = () => {
  const [usuarioPrueba, setUsuarioPrueba] = useState({
    username: "meli",
    password: "lili"
  });
  const [username, setUsername] = useState({ username: "" });
  const [password, setPassword] = useState({ password: "" });
  const classes = useStyles();

  const handleChangeUsername = e => {
    setUsername({
      username: e.target.value
    });
    console.log(username);
  };

  const handleChangePassword = e => {
    setPassword({
      password: e.target.value
    });
    console.log(password);
  };

  const verifyPassword = () => {};

  return (
    <Container className={classes.container} maxWidth={false}>
      <Header titulo="Coronavirus Global" />
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          <TextField
            className={classes.item}
            variant="outlined"
            label="Usuario"
            onChange={handleChangeUsername}
          />
          <TextField
            className={classes.item}
            variant="outlined"
            label="Contraseña"
            type="password"
            onChange={handleChangePassword}
          />
          <Button
            className={classes.item}
            variant="outlined"
            onClick={verifyPassword}
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;
