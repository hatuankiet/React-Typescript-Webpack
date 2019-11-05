import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./component/App";
import "./styles/style.scss";

const ROOT = document.querySelector(".container");

ReactDOM.render(<App name="hello word" ></App>, ROOT); 