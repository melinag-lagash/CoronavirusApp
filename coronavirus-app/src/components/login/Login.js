import React, { useState } from "react";
import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";

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
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          <TextField
            className={classes.item}
            variant="outlined"
            label="User"
            onChange={handleChangeUsername}
          />
          <TextField
            className={classes.item}
            variant="outlined"
            label="Password"
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
