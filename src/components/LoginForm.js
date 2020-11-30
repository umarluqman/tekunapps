import React, { Component, useState } from "react";
import axios from "axios";

import { setUserSession } from "../Utils/Common";
import { PostData } from "../services/PostData";

import { Redirect } from "react-router-dom";

import { motion } from "framer-motion";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const no_kp_baru = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://tekun2.nakmenangtender.com/api/login", {
        no_kp_baru: no_kp_baru.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user_info);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  const handleChange = () => {
    alert('handlechange !')
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
        {/* <img src="./assets/img/people.svg" alt="people" /> */}
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
                name="no_kp_baru"
                type="text"
                autoComplete="No Kad Pengenalan"
                // value={handleChange}
                {...no_kp_baru}

                //   name="no_kad_pengenalan"
                //   autoFocus
                // onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="kata laluan"
                label="Kata Laluan"
                type="password"
                name="password"
                {...password}
                autoComplete="current-password"

                // onChange={this.onChange}
                // value=""
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Ingat kata laluan"
              />

              {/* {error && (
                <>
                  <small style={{ color: "red" }}>{error}</small>
                  <br />
                </>
              )} */}
              <Button
                // href="/Dashboard"
                // type="submit"
                // onClick={this.login}

                // value="Login"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                type="button"
                value={loading ? "Loading..." : "Login"}
                onClick={handleLogin}
                disabled={loading}
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
                  <Link href="/Register" variant="body2">
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

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default LoginForm;
