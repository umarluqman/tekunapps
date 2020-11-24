import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../services/PostData";

import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      PostData("login", this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
      return <Redirect to={"/Dashboard/"} />;
    }

    return (
      <div className="container">
        <div className="ontopboard">
          <motion.img
            src="./assets/img/logotekun.svg"
            alt="logo"
            animate={{ scale: [0, 1], opacity: [0.2, 2] }}
            transition={{ duration: 0.9 }}
          />
          <hr />
          <img src="./assets/img/people.svg" alt="people" />
        </div>
        <Grid className="grid">
          <Grid>
            <div className="">
              <form className="form" noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="no_kad_pengenalan"
                  label="No Kad Pengenalan"
                  name="username"
                  type="text"
                  //   name="no_kad_pengenalan"
                  autoComplete="No Kad Pengenalan"
                  //   autoFocus
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="kata laluan"
                  label="Kata Laluan"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Ingat kata laluan"
                />
                <Button
                  // href="/Dashboard"
                  type="submit"
                  value="Login"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit"
                  onClick={this.login}
                >
                  Log Masuk
                </Button>
                <Grid container className="flex-space">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Lupa kata laluan ?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/RegisterForm" variant="body2">
                      {"Daftar Akaun?"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
