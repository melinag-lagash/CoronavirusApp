import React from "react";
import { render } from "react-dom";
import "./index.css";
import Container from "../src/containers/container";

const target = document.querySelector("#root");

render(<Container />, target);
